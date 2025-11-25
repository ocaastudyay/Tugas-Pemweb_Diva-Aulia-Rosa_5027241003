// frontend/src/App.jsx (KODE ROUTING UTAMA)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TambahProduk from './pages/TambahProduk';
import EditProduk from './pages/EditProduk';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rute Utama */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Rute Produk */}
          <Route path="/produk/tambah" element={<TambahProduk />} />
          <Route path="/produk/edit/:id" element={<EditProduk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;