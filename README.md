# Tugas-Pemweb_Diva-Aulia-Rosa_5027241003

# 💰 JURNAL STORE (Pencatat Stok dan Kasir Cerdas UMKM)
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

### 2. Kloning Repositori

```bash
git clone [URL_REPOSITORY_ANDA]
cd stokcerdas-umkm
```

### 3. Setup Dependencies Backend
```bash
cd backend
npm install
```

### 4. Konfigurasi Environment (.env)
Buat file bernama .env di dalam folder backend/ (sejajar dengan package.json Anda) dan isi konfigurasi berikut:
```bash
# Ganti dengan Connection String MongoDB Atlas Anda
MONGO_URI=mongodb+srv://<USER_ANDA>:<PASSWORD_ANDA>@cluster0.mongodb.net/stokcerdasdb?retryWrites=true&w=majority

# Kunci rahasia untuk JWT (harus panjang dan acak)
JWT_SECRET=rahasia-stokcerdas-umkm-456789-aman-sekali
PORT=5000
```

### 5. Menjalankan Server
#### 1. (Opsional) Instal nodemon secara global untuk automatic restart: npm install -g nodemon
#### 2. Jalankan server dari folder backend/:
```bash
nodemon server.js
```
#### 3. Jalankan server dari folder frontend/:
```bash
npm run dev
```

## DOKUMENTASI WEB
### Tampilan Daftar

<img width="1919" height="938" alt="Screenshot 2025-11-25 181712" src="https://github.com/user-attachments/assets/4bba6f0d-8ceb-447a-bc24-2630181798dc" />

### Tampilan Login

<img width="1919" height="942" alt="Screenshot 2025-11-25 181741" src="https://github.com/user-attachments/assets/8cd78217-aa44-49ee-b1bd-f6f94da239a6" />

### Tampilan Dashboard

<img width="1919" height="943" alt="Screenshot 2025-11-25 181823" src="https://github.com/user-attachments/assets/24f8f9d9-3855-49ef-893f-77d1913eeae4" />

### Tampilan Tambah

<img width="1919" height="944" alt="Screenshot 2025-11-25 181836" src="https://github.com/user-attachments/assets/46711b09-a4c1-4dd2-8639-f861dc2c6c14" />

### Tampilan Edit

<img width="1919" height="936" alt="Screenshot 2025-11-25 181850" src="https://github.com/user-attachments/assets/5faa3423-9583-4acc-8221-09551f20b749" />

### Tampilan Hapus

<img width="1919" height="938" alt="Screenshot 2025-11-25 181903" src="https://github.com/user-attachments/assets/84fcde12-047f-4b76-8043-0b4d002a955a" />

<img width="1915" height="939" alt="Screenshot 2025-11-25 181914" src="https://github.com/user-attachments/assets/313a7ed4-860a-4890-b28b-671a52366043" />

### Tampilan MongoDB

<img width="1920" height="1080" alt="Screenshot 2025-11-25 182506" src="https://github.com/user-attachments/assets/3fe56072-0be4-4cb9-a0d6-13cda8f63787" />

<img width="1920" height="1080" alt="Screenshot 2025-11-25 182515" src="https://github.com/user-attachments/assets/5c74b492-4d5f-4ece-9401-bea112e6a8fa" />


