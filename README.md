# Tugas-Pemweb_Diva-Aulia-Rosa_5027241003

# 💰 StokCerdas UMKM  
_Aplikasi Manajemen Stok Modern untuk Bisnis UMKM_

StokCerdas UMKM adalah aplikasi manajemen stok berbasis **MERN Stack** yang dirancang khusus untuk membantu Usaha Mikro, Kecil, dan Menengah (UMKM) dalam mengelola inventaris secara modern, cepat, dan aman.  

Aplikasi ini merupakan **Single Page Application (SPA)** dengan sistem autentikasi, manajemen data produk, dan upload gambar yang aman.

---

## 🧐 Problem Statement

UMKM sering menghadapi beberapa hambatan operasional terkait pengelolaan stok:

### ❌ 1. Ketidakakuratan Stok Real-time  
Banyak UMKM masih menggunakan pencatatan manual sehingga sulit mengetahui stok terkini, stok minimum, dan kebutuhan restock.

### ❌ 2. Inefisiensi & Keamanan Data  
Spreadsheet/manual rentan human error dan tidak memiliki mekanisme keamanan untuk membatasi akses.

### ❌ 3. Pengelolaan Media Produk  
Tidak ada storage terpusat untuk gambar produk yang penting untuk inventarisasi visual.

---

## ✅ Solution Overview

StokCerdas UMKM menyediakan solusi inventaris modern dengan fitur:

- 🔐 **Autentikasi JWT** (Register, Login)
- 📦 **CRUD Produk Lengkap**
- 🖼️ **Upload Gambar Produk dengan Multer**
- 🔒 **Endpoint Terproteksi**
- 📊 **Manajemen Stok Real-time**

---

## 🛠️ Tech Stack

| Teknologi | Kategori | Peran |
|----------|----------|--------|
| **React.js** | Frontend | Dashboard, Login, & Form |
| **Node.js + Express.js** | Backend | Server API & Business Logic |
| **MongoDB + Mongoose** | Database | Penyimpanan User & Produk |
| **JWT + bcrypt.js** | Security | Autentikasi & Hash Password |
| **Multer** | File Handling | Upload Gambar |

---

## ✨ Fitur Utama

- Autentikasi Aman (JWT & bcrypt)
- CRUD Produk dengan SKU & minimum stock
- Upload gambar produk
- Role akses (owner / staff)
- Endpoint API terproteksi
- Penyimpanan database MongoDB yang fleksibel

---

## 🚀 Cara Menjalankan Proyek

### 1. Prasyarat  
Instal software berikut:

- Node.js (LTS)
- npm  
- MongoDB Atlas / MongoDB Lokal

---
