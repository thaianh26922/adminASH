import React, { useState } from 'react';
import { Table, Button, Input, Divider, Typography, Radio, Modal, Form, Input as AntInput, Checkbox } from 'antd';
import { BsPencilSquare, BsTrash, BsPlus } from 'react-icons/bs';
import './employeeManagement.css';

const { Title } = Typography;
const { Search } = Input;

function EmployeeManagement() {
    const [employees, setEmployees] = useState([
        {
            id: 'NV001',
            name: 'Bùi Quốc Khánh',
            phone: '01299377128',
            email: 'khanhbui@gmail.com',
            role: 'Nhân viên tư vấn',
            notes: 'Thể thao',
            dob: '01/01/1990',
            gender: 'Nam',
            address: 'Hà Đông, Hà Nội',
            identity: '0123456789'
        },
        {
            id: 'NV002',
            name: 'Nguyễn Thế Bách',
            phone: '0189208214',
            email: 'bacthe@gmail.com',
            role: 'Nhân viên tư vấn',
            notes: 'Thời trang',
            dob: '05/03/1992',
            gender: 'Nam',
            address: 'Cầu Giấy, Hà Nội',
            identity: '0987654321'
        },
        {
            id: 'NV003',
            name: 'Bùi Quốc Tùng',
            phone: '01299377128',
            email: 'tungbui@gmail.com',
            role: 'Nhân viên tư vấn',
            notes: 'Thể thao và thời trang',
            dob: '10/11/1991',
            gender: 'Nam',
            address: 'Thanh Xuân, Hà Nội',
            identity: '1122334455'
        }
    ]);

    const [filteredEmployees, setFilteredEmployees] = useState(employees);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);

    const handleSearch = (value) => {
        const filtered = employees.filter((employee) =>
            employee.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredEmployees(filtered);
    };

    const handleStatusChange = (e) => {
        const status = e.target.value;
        const filtered = status === 'all' ? employees : employees.filter(emp => emp.role.includes(status));
        setFilteredEmployees(filtered);
    };

    const handleRowClick = (record) => {
        setSelectedEmployee(record);
    };

    const handleEditClick = (employee) => {
        setSelectedEmployee(employee);
        setIsEditModalVisible(true);
    };

    const handleEditModalOk = () => {
        setIsEditModalVisible(false);
    };

    const handleEditModalCancel = () => {
        setIsEditModalVisible(false);
    };

    const columns = [
        {
            title: 'Mã nhân viên',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <Checkbox>{text}</Checkbox>
        },
        { title: 'Tên nhân viên', dataIndex: 'name', key: 'name' },
        { title: 'Số điện thoại', dataIndex: 'phone', key: 'phone' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Vai trò', dataIndex: 'role', key: 'role' },
        { title: 'Ghi chú', dataIndex: 'notes', key: 'notes' },
        {
            title: 'Hành động',
            key: 'action',
            render: (_, record) => (
                <div>
                    <BsPencilSquare
                        className="icon-action"
                        style={{ color: '#faad14' }}
                        onClick={() => handleEditClick(record)}
                    />
                    <BsTrash className="icon-action" style={{ color: '#ff4d4f' }} />
                </div>
            ),
        }
    ];

    return (
        <div className="employee-container">
            <div className="header">
                <Title level={3}>Quản Lý Nhân Viên</Title>
                <Button type="primary" icon={<BsPlus />} size="large">
                    Thêm nhân viên
                </Button>
            </div>

            <div className="filters">
                <div className="filter-group">
                    <Radio.Group defaultValue="all" onChange={handleStatusChange}>
                        <Radio value="all">Tất cả</Radio>
                        <Radio value="Nhân viên tư vấn">Nhân viên tư vấn</Radio>
                    </Radio.Group>
                </div>
                <Search
                    placeholder="Nhập mã, tên"
                    allowClear
                    enterButton="Tìm kiếm"
                    size="large"
                    onSearch={handleSearch}
                    style={{ width: 300 }}
                />
            </div>

            <div className="table-wrapper">
                <Table
                    columns={columns}
                    dataSource={filteredEmployees}
                    rowKey="id"
                    pagination={{ pageSize: 5 }}
                    bordered
                    onRow={(record) => ({
                        onClick: () => handleRowClick(record),
                    })}
                />
            </div>

            {selectedEmployee && (
                <div className="detail-panel">
                    <h4>Thông tin</h4>
                    <p><strong>Mã nhân viên:</strong> {selectedEmployee.id}</p>
                    <p><strong>Tên nhân viên:</strong> {selectedEmployee.name}</p>
                    <p><strong>Ngày sinh:</strong> {selectedEmployee.dob}</p>
                    <p><strong>Giới tính:</strong> {selectedEmployee.gender}</p>
                    <p><strong>Vai trò:</strong> {selectedEmployee.role}</p>
                    <p><strong>Địa chỉ:</strong> {selectedEmployee.address}</p>
                    <p><strong>Điện thoại:</strong> {selectedEmployee.phone}</p>
                    <p><strong>Email:</strong> {selectedEmployee.email}</p>
                    <p><strong>Số CMND/CCCD:</strong> {selectedEmployee.identity}</p>
                    <div className="footer-buttons">
                        <Button type="primary" style={{ marginRight: 10 }}>Cập nhật</Button>
                        <Button type="danger">Xóa</Button>
                    </div>
                </div>
            )}

            <Modal
                title="Chỉnh Sửa Nhân Viên"
                visible={isEditModalVisible}
                onOk={handleEditModalOk}
                onCancel={handleEditModalCancel}
                width={600}
                bodyStyle={{ padding: '20px' }}
            >
                {selectedEmployee && (
                    <Form layout="vertical">
                        <Form.Item label="Tên nhân viên">
                            <AntInput defaultValue={selectedEmployee.name} />
                        </Form.Item>
                        <Form.Item label="Số điện thoại">
                            <AntInput defaultValue={selectedEmployee.phone} />
                        </Form.Item>
                        <Form.Item label="Email">
                            <AntInput defaultValue={selectedEmployee.email} />
                        </Form.Item>
                    </Form>
                )}
            </Modal>

            <Divider />

            <div className="footer-buttons">
                <Button type="default" size="large" style={{ marginRight: 10 }}>
                    Quay lại
                </Button>
                <Button type="primary" size="large">
                    Import
                </Button>
            </div>
        </div>
    );
}

export default EmployeeManagement;
