import React, { useState } from 'react';
import { Table, Button, Input, Divider, Typography, Radio, Modal, Form, Input as AntInput } from 'antd';
import { BsPencilSquare, BsTrash, BsPlus, BsInfoCircle } from 'react-icons/bs';
import './supplierManagement.css';

const { Title } = Typography;
const { Search } = Input;

function SupplierManagement() {
    const [suppliers, setSuppliers] = useState([
        { id: 'NCC0001', name: 'YONEX', phone: '01234567788', email: 'yonex@gmail.com', status: 'Hoạt động' },
        { id: 'NCC0002', name: 'VNB', phone: '01236777788', email: 'vnb@gmail.com', status: 'Hoạt động' },
        { id: 'NCC0003', name: 'VIN', phone: '01896777788', email: 'vin@gmail.com', status: 'Ngừng hoạt động' },
    ]);

    const [filteredSuppliers, setFilteredSuppliers] = useState(suppliers);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [newSupplier, setNewSupplier] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
        status: 'Hoạt động',
    });

    const handleSearch = (value) => {
        const filtered = suppliers.filter((supplier) =>
            supplier.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuppliers(filtered);
    };

    const handleStatusChange = (e) => {
        const status = e.target.value;
        const filtered = status === 'all' ? suppliers : suppliers.filter(s => s.status === status);
        setFilteredSuppliers(filtered);
    };

    const handleEditClick = (supplier) => {
        setSelectedSupplier(supplier);
        setIsEditModalVisible(true);
    };

    const handleDetailClick = (supplier) => {
        setSelectedSupplier(supplier);
        setIsDetailModalVisible(true);
    };

    const handleAddClick = () => {
        setIsAddModalVisible(true);
    };

    const handleAddModalOk = () => {
        setSuppliers([...suppliers, newSupplier]);
        setFilteredSuppliers([...suppliers, newSupplier]);
        setIsAddModalVisible(false);
        setNewSupplier({ id: '', name: '', phone: '', email: '', status: 'Hoạt động' });
    };

    const handleAddModalCancel = () => {
        setIsAddModalVisible(false);
        setNewSupplier({ id: '', name: '', phone: '', email: '', status: 'Hoạt động' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSupplier((prev) => ({ ...prev, [name]: value }));
    };

    const columns = [
        { title: 'Mã nhà cung cấp', dataIndex: 'id', key: 'id' },
        { title: 'Tên hàng', dataIndex: 'name', key: 'name' },
        { title: 'Số điện thoại', dataIndex: 'phone', key: 'phone' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Trạng thái', dataIndex: 'status', key: 'status' },
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
                    <BsInfoCircle
                        className="icon-action"
                        style={{ color: '#1890ff' }}
                        onClick={() => handleDetailClick(record)}
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="supplier-container">
            <div className="header">
                <Title level={3}>Quản Lý Nhà Cung Cấp</Title>
                <Button type="primary" icon={<BsPlus />} size="large" onClick={handleAddClick}>
                    Thêm nhà cung cấp
                </Button>
            </div>

            <div className="filters">
                <div className="filter-group">
                    <Radio.Group defaultValue="all" onChange={handleStatusChange}>
                        <Radio value="all">Tất cả</Radio>
                        <Radio value="Hoạt động">Hoạt động</Radio>
                        <Radio value="Ngừng hoạt động">Ngừng hoạt động</Radio>
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
                    dataSource={filteredSuppliers}
                    rowKey="id"
                    pagination={{ pageSize: 5 }}
                    bordered
                />
            </div>

            <Modal
                title="Thêm Nhà Cung Cấp"
                open={isAddModalVisible}
                onOk={handleAddModalOk}
                onCancel={handleAddModalCancel}
                footer={[
                    <Button key="cancel" onClick={handleAddModalCancel}>
                        Hủy bỏ
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleAddModalOk}>
                        Lưu
                    </Button>,
                ]}
            >
                <Form layout="vertical">
                    <Form.Item label="Mã nhà cung cấp">
                        <AntInput
                            name="id"
                            value={newSupplier.id}
                            onChange={handleInputChange}
                        />
                    </Form.Item>
                    <Form.Item label="Tên nhà cung cấp">
                        <AntInput
                            name="name"
                            value={newSupplier.name}
                            onChange={handleInputChange}
                        />
                    </Form.Item>
                    <Form.Item label="Số điện thoại">
                        <AntInput
                            name="phone"
                            value={newSupplier.phone}
                            onChange={handleInputChange}
                        />
                    </Form.Item>
                    <Form.Item label="Email">
                        <AntInput
                            name="email"
                            value={newSupplier.email}
                            onChange={handleInputChange}
                        />
                    </Form.Item>
                </Form>
            </Modal>

            <Divider />

            
        </div>
    );
}

export default SupplierManagement;
