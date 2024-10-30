import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';
import './Service.css';

const services = [
  {
    id: 'SV01',
    image: 'https://via.placeholder.com/80',
    name: 'Hàn vợt',
    category: 'Vợt',
    sport: 'Cầu lông',
    status: 'Hoạt động',
    description: 'Hàn lại khung của vợt',
    views: 8386,
    date: '2024-08-29',
  },
  {
    id: 'SV02',
    image: 'https://via.placeholder.com/80',
    name: 'Căng dây vợt',
    category: 'Vợt',
    sport: 'Cầu lông',
    status: 'Hoạt động',
    description: 'Căng dây cho vợt cầu lông',
    views: 4523,
    date: '2024-07-15',
  },
  {
    id: 'SV03',
    image: 'https://via.placeholder.com/80',
    name: 'Bảo dưỡng vợt',
    category: 'Vợt',
    sport: 'Cầu lông',
    status: 'Hoạt động',
    description: 'Bảo dưỡng định kỳ cho vợt cầu lông',
    views: 3298,
    date: '2024-09-05',
  },
];

function ServiceManagement() {
  const [selectedService, setSelectedService] = useState(null);

  const handleViewDetails = (service) => {
    setSelectedService(service);
  };

  const handleDelete = (id) => {
    alert(`Xóa dịch vụ: ${id}`);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  return (
    <div className="container">
      <h1>Quản lý dịch vụ</h1>
      <table className="service-table">
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Ảnh</th>
            <th>Tên</th>
            <th>Phân loại</th>
            <th>Môn thể thao</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>
                <img src={service.image} alt={service.name} />
              </td>
              <td>{service.name}</td>
              <td>{service.category}</td>
              <td>{service.sport}</td>
              <td>{service.status}</td>
              <td>
                <button onClick={() => handleViewDetails(service)}>
                  <FaEye />
                </button>
                <button>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(service.id)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedService && (
        <div className="service-detail">
          <h2>Chi tiết dịch vụ</h2>
          <p><strong>Tên dịch vụ:</strong> {selectedService.name}</p>
          <img src={selectedService.image} alt={selectedService.name} />
          <p><strong>Phân loại:</strong> {selectedService.category}</p>
          <p><strong>Ngày đăng:</strong> {selectedService.date}</p>
          <p><strong>Mô tả:</strong> {selectedService.description}</p>
          <p><strong>Môn thể thao:</strong> {selectedService.sport}</p>
          <p><strong>Lượt xem:</strong> {selectedService.views}</p>
          <p><strong>Trạng thái:</strong> {selectedService.status}</p>
          <button onClick={handleCloseDetails}>Đóng</button>
        </div>
      )}
    </div>
  );
}

export default ServiceManagement;
