import React from 'react';

function Errors() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Không tìm thấy</h1>
            <p style={styles.text}>Trang bạn đang tìm không tồn tại hoặc đã bị xóa.</p>
            <a href="/" style={styles.link}>Quay lại trang chủ</a>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        color: '#333',
        textAlign: 'center',
    },
    heading: {
        fontSize: '4rem',
        margin: '0.5rem',
    },
    text: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
    },
    link: {
        color: '#007BFF',
        fontSize: '1.2rem',
        textDecoration: 'none',
        border: '1px solid #007BFF',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        transition: 'all 0.3s',
    },
};

export default Errors;