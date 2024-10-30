import React, { useState } from 'react';
import { Table, Checkbox, Button, Divider, Typography } from 'antd';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import './importProduct.css';

const { Title } = Typography;

function ImportProduct() {
    const [productInfo, setProductInfo] = useState([
        { stt: 1, thamSo: 'Màu', giaTri: 'Đen, trắng', hienThi: true },
        { stt: 2, thamSo: 'Size', giaTri: '29, 30, 31, 32', hienThi: true },
        { stt: 3, thamSo: 'Chất liệu', giaTri: 'POWER CUSHION+, Hyper ms LITE, Durable Skin Light, Toughbird Light, Power Graphite Sheet', hienThi: false },
        { stt: 4, thamSo: 'Số lượng', giaTri: '50', hienThi: true },
        { stt: 5, thamSo: 'Giá nhập', giaTri: '1.000.000 đ', hienThi: true },
        { stt: 6, thamSo: 'Giá bán', giaTri: '1.500.000 đ', hienThi: true },
        { stt: 7, thamSo: 'Ảnh', giaTri: ['https://via.placeholder.com/50', 'https://via.placeholder.com/50'], hienThi: true },
    ]);

    const [products, setProducts] = useState([
        { stt: 1, anh: 'https://via.placeholder.com/50', mau: 'Đen', size: 31, soLuong: 50, giaNhap: '1.000.000 đ', giaBan: '1.500.000 đ', trangThai: 'Cập nhật' },
        { stt: 2, anh: 'https://via.placeholder.com/50', mau: 'Đen', size: 30, soLuong: 50, giaNhap: '1.000.000 đ', giaBan: '1.500.000 đ', trangThai: 'Cập nhật' },
        { stt: 3, anh: 'https://via.placeholder.com/50', mau: 'Trắng', size: 29, soLuong: 50, giaNhap: '1.000.000 đ', giaBan: '1.500.000 đ', trangThai: 'Thêm mới' },
    ]);

    const columnsInfo = [
        { title: 'STT', dataIndex: 'stt', key: 'stt', align: 'center' },
        { title: 'Tham số', dataIndex: 'thamSo', key: 'thamSo' },
        {
            title: 'Giá trị',
            dataIndex: 'giaTri',
            key: 'giaTri',
            render: (value) =>
                Array.isArray(value) ? (
                    value.map((src, idx) => (
                        <img key={idx} src={src} alt="Product" style={{ width: 50, marginRight: 5 }} />
                    ))
                ) : (
                    value
                ),
        },
        {
            title: 'Hiển thị',
            dataIndex: 'hienThi',
            key: 'hienThi',
            align: 'center',
            render: (_, record) => (
                <Checkbox
                    checked={record.hienThi}
                    onChange={(e) => handleCheckboxChange(record.stt, e.target.checked)}
                />
            ),
        },
    ];

    const columnsProducts = [
        { title: 'STT', dataIndex: 'stt', key: 'stt', align: 'center' },
        {
            title: 'Ảnh',
            dataIndex: 'anh',
            key: 'anh',
            render: (src) => <img src={src} alt="Product" style={{ width: 50 }} />,
        },
        { title: 'Màu', dataIndex: 'mau', key: 'mau' },
        { title: 'Size', dataIndex: 'size', key: 'size', align: 'center' },
        { title: 'Số lượng', dataIndex: 'soLuong', key: 'soLuong', align: 'center' },
        { title: 'Giá nhập', dataIndex: 'giaNhap', key: 'giaNhap', align: 'right' },
        { title: 'Giá bán', dataIndex: 'giaBan', key: 'giaBan', align: 'right' },
        { title: 'Trạng thái', dataIndex: 'trangThai', key: 'trangThai', align: 'center' },
        {
            title: 'Hành động',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <div>
                    <BsPencilSquare style={{ color: '#faad14', cursor: 'pointer', marginRight: 10 }} />
                    <BsTrash style={{ color: '#ff4d4f', cursor: 'pointer' }} />
                </div>
            ),
        },
    ];

    const handleCheckboxChange = (stt, checked) => {
        const newInfo = productInfo.map((item) =>
            item.stt === stt ? { ...item, hienThi: checked } : item
        );
        setProductInfo(newInfo);
    };

    return (
        <div className="import-container">
            <Title level={3}>Quản lý sản phẩm</Title>
            <Table
                columns={columnsInfo}
                dataSource={productInfo}
                pagination={false}
                rowKey="stt"
                bordered
                style={{ marginBottom: '20px' }}
            />
            <div className="button-group">
                <Button type="default" size="large">
                    Quay lại
                </Button>
                <Button type="primary" size="large">
                    Xem trước
                </Button>
            </div>
            <Divider />
            <Table
                columns={columnsProducts}
                dataSource={products}
                rowKey="stt"
                pagination={{ pageSize: 5 }}
                bordered
                style={{ marginTop: '20px' }}
            />
            <div className="button-group" style={{ justifyContent: 'flex-end' }}>
                <Button
                    type="primary"
                    size="large"
                    style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
                >
                    Import
                </Button>
            </div>
        </div>
    );
}

export default ImportProduct;
