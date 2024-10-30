import React from 'react';
import { Table, Button, Typography, Divider, Space } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import './Invoice.css'; // Import file CSS riêng

const { Title, Text } = Typography;

const Invoice = () => {
  const invoiceData = {
    storeName: 'ACE SPORTS HAVEN',
    phone: '0852488845',
    date: '14/10/2023, 5:53PM',
    invoiceNumber: 'HD00122002',
    customerName: 'Lã Như Bách',
    customerAddress: 'Ngọc Lâm, Long Biên, Hà Nội',
    items: [
      { name: 'Vợt cầu lông Yonex Nanoflare 700 Tour', price: 2700000, quantity: 2 },
      { name: 'Balo cầu lông Yonex BA92212WEX', price: 850000, quantity: 1 },
      { name: 'Túi cầu lông Yonex 24BT2004U', price: 330000, quantity: 1 },
    ],
    shippingFee: 20000,
    totalAmount: 7100000,
  };

  const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Đơn giá',
      dataIndex: 'price',
      key: 'price',
      render: (text) => `${text.toLocaleString()} đ`,
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Thành tiền',
      key: 'total',
      render: (_, record) => `${(record.price * record.quantity).toLocaleString()} đ`,
    },
  ];

  const totalPrice = invoiceData.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div id="invoice-content">
        <Title level={3} style={{ textAlign: 'center' }}>HÓA ĐƠN BÁN HÀNG</Title>
        <Text strong style={{ textAlign: 'center', display: 'block' }}>
          Số HĐ: {invoiceData.invoiceNumber}
        </Text>
        <Divider />
        <Space direction="vertical" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text>Ngày bán: {invoiceData.date}</Text>
            <Text>Điện thoại: {invoiceData.phone}</Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text>Tên cửa hàng: {invoiceData.storeName}</Text>
          </div>
          <div>
            <Text>Khách hàng: {invoiceData.customerName}</Text>
            <br />
            <Text>Địa chỉ: {invoiceData.customerAddress}</Text>
          </div>
        </Space>
        <Divider />
        <Table
          dataSource={invoiceData.items}
          columns={columns}
          pagination={false}
          rowKey={(record) => record.name}
        />
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text strong>Tổng tiền hàng:</Text>
          <Text>{totalPrice.toLocaleString()} đ</Text>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text strong>Phí giao hàng:</Text>
          <Text>{invoiceData.shippingFee.toLocaleString()} đ</Text>
        </div>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title level={4}>Tổng thanh toán:</Title>
          <Title level={4}>{invoiceData.totalAmount.toLocaleString()} đ</Title>
        </div>
        <Divider />
        <Text style={{ textAlign: 'center', display: 'block' }}>
          (Bảy triệu một trăm nghìn đồng)
        </Text>
        <Text style={{ textAlign: 'center', display: 'block', marginTop: '20px' }}>
          Cảm ơn và hẹn gặp lại!
        </Text>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button
          type="primary"
          icon={<PrinterOutlined />}
          onClick={() => window.print()}
        >
          In hóa đơn
        </Button>
      </div>
    </div>
  );
};

export default Invoice;
