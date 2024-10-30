import React from 'react';
import ReactDOM from 'react-dom';

const FeedbackDetail = () => {
  const feedback = {
    username: 'Nguyễn Hải Hưng',
    product: 'Cặp vợt cầu lông Lining Axforce 9',
    rating: 5,
    comment: 'Cặp vợt này dùng rất thích, cả mình và người yêu đều rất hài lòng.',
    date: '27/09/2024',
    email: 'haihungdeptrai@gmail.com',
    phone: '0915987265',
    productId: 'PD06',
    image: 'https://via.placeholder.com/150',
  };

  const styles = {
    container: {
      width: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f2f2f2',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    label: {
      fontWeight: 'bold',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Chi tiết phản hồi</h2>

      <div style={styles.row}>
        <label style={styles.label}>Tên người dùng:</label>
        <span>{feedback.username}</span>
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Sản phẩm:</label>
        <span>{feedback.product}</span>
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Sao đánh giá:</label>
        <span>{'⭐'.repeat(feedback.rating)}</span>
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Phản hồi:</label>
        <span>{feedback.comment}</span>
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Ngày:</label>
        <span>{feedback.date}</span>
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Email:</label>
        <span>{feedback.email}</span>
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Số điện thoại:</label>
        <span>{feedback.phone}</span>
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Mã sản phẩm:</label>
        <span>{feedback.productId}</span>
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Ảnh:</label>
        <img src={feedback.image} alt="Product" style={styles.image} />
      </div>

      <button style={styles.button}>OK</button>
    </div>
  );
};

export default FeedbackDetail;