// frontend/src/pages/Register.jsx (Tema PINK KONTRAS)

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ nama: '', email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { nama, email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            setMessage(response.data.msg); 
            setTimeout(() => { navigate('/login'); }, 2000);
        } catch (error) {
            const errorMsg = error.response?.data?.msg || "Terjadi kesalahan pada server.";
            setMessage(errorMsg);
        }
    };
    
    // Style Pink Kontras
    const containerStyle = { maxWidth: '400px', margin: '50px auto', padding: '30px', border: '1px solid #ffdbf2', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'var(--color-background)' };
    const inputStyle = { width: '100%', padding: '12px', border: '1px solid #dcdcdc', borderRadius: '5px', boxSizing: 'border-box', backgroundColor: '#f9f9f9' };
    const buttonStyle = { width: '100%', padding: '12px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: 'center', color: 'var(--color-secondary)' }}>Daftar Akun Baru</h2>
            
            {message && <p style={{ color: message.includes('berhasil') ? 'var(--color-accent-success)' : 'var(--color-accent-delete)', textAlign: 'center' }}>{message}</p>}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <input type="text" placeholder="Nama Lengkap" name="nama" value={nama} onChange={handleChange} required style={inputStyle} />
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} required style={inputStyle} />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} required style={inputStyle} />
                </div>
                
                {/* Tombol Daftar */}
                <button type="submit" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = 'var(--color-secondary)'} onMouseOut={(e) => e.target.style.backgroundColor = 'var(--color-primary)'}>
                    Daftar
                </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '15px' }}>
                Sudah punya akun? <Link to="/login">Login di sini</Link>
            </p>
        </div>
    );
};

export default Register;