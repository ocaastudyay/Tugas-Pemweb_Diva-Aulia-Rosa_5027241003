import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Gaya Inline Mutlak ---
  // Kita menggunakan warna hex agar tidak bergantung pada index.css
  const PRIMARY_PINK = '#ff69b4'; 
  const SECONDARY_PINK = '#c71585'; 
  const DELETE_RED = '#dc3545'; 
  const EDIT_YELLOW = '#ffc107'; 
  const TEXT_DARK = '#222222';

  const tableHeaderStyle = { padding: '12px', textAlign: 'left', backgroundColor: SECONDARY_PINK, color: 'white' };
  const tableCellStyle = { padding: '12px', backgroundColor: 'white', borderBottom: '1px solid #eeeeee' };
  
  const logoutButtonStyle = { 
    marginTop: '20px', 
    padding: '10px 20px', 
    backgroundColor: DELETE_RED, 
    color: 'white', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer' 
  };
  const addButtonStyle = { 
    display: 'inline-block', 
    marginBottom: '15px', 
    padding: '10px 20px', 
    backgroundColor: PRIMARY_PINK, 
    color: 'white', 
    textDecoration: 'none', 
    borderRadius: '5px', 
    transition: 'background-color 0.3s' 
  };
  const editButtonStyle = { 
    marginRight: '5px', 
    padding: '8px 15px', 
    backgroundColor: EDIT_YELLOW, 
    color: TEXT_DARK, 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer' 
  }; 
  const deleteButtonStyle = { 
    padding: '8px 15px', 
    backgroundColor: DELETE_RED, 
    color: 'white', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer' 
  }; 
  // --- Akhir Gaya Inline Mutlak ---

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const fetchProduk = async () => {
    const token = localStorage.getItem('token');
    if (!token) { setLoading(false); return; }
    
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/produk', { headers: { 'x-auth-token': token } });
      setProduk(response.data); 
      setLoading(false);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        setError("Gagal memuat data produk.");
        setLoading(false);
      }
    }
  };

  const handleDelete = async (id, nama) => {
    if (window.confirm(`Yakin ingin menghapus produk "${nama}"?`)) {
      const token = localStorage.getItem('token');
      if (!token) return navigate('/login');

      try {
        await axios.delete(`http://localhost:5000/api/produk/${id}`, { headers: { 'x-auth-token': token } });
        fetchProduk();
        alert(`Produk ${nama} berhasil dihapus.`);
      } catch (err) {
        alert("Gagal menghapus produk. Coba lagi.");
      }
    }
  };

  useEffect(() => {
    fetchProduk();
  }, [navigate]); 

  if (loading) return <div style={{padding: '20px'}}>Memuat data...</div>;
  if (error) return <div style={{padding: '20px', color: DELETE_RED}}>{error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: `2px solid ${PRIMARY_PINK}`, paddingBottom: '10px', color: SECONDARY_PINK }}>Dashboard Manajemen Stok</h2>
      
      {/* TOMBOL LOGOUT (HARUS ADA DAN MERAH) */}
      <button onClick={handleLogout} style={logoutButtonStyle}>
        Logout
      </button>
      
      <h3 style={{ marginTop: '40px', color: SECONDARY_PINK }}>Daftar Produk ({produk.length})</h3>
      
      {/* TOMBOL TAMBAH PRODUK BARU (HARUS ADA DAN PINK) */}
      <Link to="/produk/tambah" style={addButtonStyle}>
        + Tambah Produk Baru
      </Link>
      
      {produk.length === 0 ? (
        <p style={{ marginTop: '15px', fontStyle: 'italic' }}>Belum ada produk. Silakan tambahkan produk baru.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0px', marginTop: '15px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <thead>
            <tr>
              <th style={{...tableHeaderStyle, borderTopLeftRadius: '8px'}}>SKU</th>
              <th style={tableHeaderStyle}>Nama Produk</th>
              <th style={tableHeaderStyle}>Stok</th>
              <th style={tableHeaderStyle}>Harga Jual</th>
              <th style={{...tableHeaderStyle, borderTopRightRadius: '8px'}}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {produk.map((item) => (
              <tr key={item._id}>
                <td style={tableCellStyle}>{item.sku}</td>
                <td style={tableCellStyle}>{item.nama}</td>
                <td style={tableCellStyle}>{item.stokSaatIni} {item.satuan}</td>
                <td style={tableCellStyle}>Rp. {item.hargaJual.toLocaleString('id-ID')}</td>
                <td style={tableCellStyle}>
                    {/* Tombol Edit (Kuning) */}
                    <Link to={`/produk/edit/${item._id}`}>
                        <button style={editButtonStyle}>Edit</button>
                    </Link>
                    
                    {/* Tombol Delete (Merah) */}
                    <button 
                        onClick={() => handleDelete(item._id, item.nama)} 
                        style={deleteButtonStyle}>
                        Hapus
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;