import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const TambahProduk = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        sku: '', nama: '', hargaBeli: '', hargaJual: '', stokSaatIni: '', stokMinimum: '', satuan: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const value = (e.target.name.includes('harga') || e.target.name.includes('stok')) ? Number(e.target.value) : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) { navigate('/login'); return; }

        try {
            await axios.post('http://localhost:5000/api/produk', formData, { headers: { 'x-auth-token': token } });
            setMessage('Produk berhasil ditambahkan!');
            setTimeout(() => { navigate('/'); }, 2000);

        } catch (error) {
            const errorMsg = error.response?.data?.msg || "Gagal menambahkan produk. Periksa input.";
            setMessage(errorMsg);
        }
    };

    // Style Pink Kontras
    const formStyle = { maxWidth: '600px', margin: '50px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'var(--color-background)' };
    const inputStyle = { width: '100%', padding: '12px', margin: '8px 0', boxSizing: 'border-box', border: '1px solid #dcdcdc', borderRadius: '5px', backgroundColor: '#f9f9f9' };
    const labelStyle = { display: 'block', fontWeight: 'bold', marginTop: '10px', color: 'var(--color-text-dark)' };
    const buttonStyle = { width: '100%', padding: '12px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' };

    return (
        <div style={formStyle}>
            <h2 style={{ borderBottom: '1px solid var(--color-primary)', paddingBottom: '10px' }}>Tambah Produk Baru</h2>
            <Link to="/" style={{ display: 'block', marginBottom: '15px' }}>&larr; Kembali ke Dashboard</Link>

            {message && <p style={{ color: message.includes('berhasil') ? 'var(--color-accent-success)' : 'var(--color-accent-delete)' }}>{message}</p>}

            <form onSubmit={handleSubmit}>
                <label style={labelStyle}>SKU:</label>
                <input type="text" name="sku" value={formData.sku} onChange={handleChange} required style={inputStyle} />
                
                <label style={labelStyle}>Nama Produk:</label>
                <input type="text" name="nama" value={formData.nama} onChange={handleChange} required style={inputStyle} />
                
                <label style={labelStyle}>Harga Beli (Rp):</label>
                <input type="number" name="hargaBeli" value={formData.hargaBeli} onChange={handleChange} required style={inputStyle} min="0" />
                
                <label style={labelStyle}>Harga Jual (Rp):</label>
                <input type="number" name="hargaJual" value={formData.hargaJual} onChange={handleChange} required style={inputStyle} min="0" />
                
                <label style={labelStyle}>Stok Saat Ini:</label>
                <input type="number" name="stokSaatIni" value={formData.stokSaatIni} onChange={handleChange} required style={inputStyle} min="0" />
                
                <label style={labelStyle}>Stok Minimum:</label>
                <input type="number" name="stokMinimum" value={formData.stokMinimum} onChange={handleChange} required style={inputStyle} min="0" />
                
                <label style={labelStyle}>Satuan (cth: pcs, kg, kotak):</label>
                <input type="text" name="satuan" value={formData.satuan} onChange={handleChange} required style={inputStyle} />
                
                <button type="submit" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = 'var(--color-secondary)'} onMouseOut={(e) => e.target.style.backgroundColor = 'var(--color-primary)'}>
                    Simpan Produk
                </button>
            </form>
        </div>
    );
};

export default TambahProduk;