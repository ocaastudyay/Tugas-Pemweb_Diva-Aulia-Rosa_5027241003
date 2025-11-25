const Produk = require('../models/Produk');
const upload = require('../middleware/upload'); 
const fs = require('fs'); 
const path = require('path');

exports.createProduk = (req, res) => {
    upload(req, res, async (err) => {
        if (err) return res.status(400).json({ msg: err });
        
        try {
            const { sku, nama, hargaBeli, hargaJual, stokSaatIni, stokMinimum, satuan } = req.body;
            const fotoUrl = req.file ? `/uploads/${req.file.filename}` : undefined; 

            const newProduk = new Produk({ sku, nama, hargaBeli, hargaJual, stokSaatIni, stokMinimum, satuan, fotoUrl });
            const produk = await newProduk.save();
            res.status(201).json(produk);
        } catch (error) {
            if (req.file) fs.unlinkSync(path.join(__dirname, '..', 'uploads', req.file.filename));
            res.status(500).json({ error: 'Gagal membuat produk', details: error.message });
        }
    });
};


exports.getProduk = async (req, res) => {
    try {
        const produk = await Produk.find().sort({ createdAt: -1 }); 
        res.json(produk);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};


exports.updateProduk = async (req, res) => {
    try {
        const updatedProduk = await Produk.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduk) return res.status(404).json({ msg: 'Produk tidak ditemukan' });
        res.json(updatedProduk);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};


exports.deleteProduk = async (req, res) => {
    try {
        const produk = await Produk.findById(req.params.id);
        if (!produk) return res.status(404).json({ msg: 'Produk tidak ditemukan' });
        
        if (produk.fotoUrl) {
            const filePath = path.join(__dirname, '..', produk.fotoUrl);
            fs.unlink(filePath, (err) => {
                if (err) console.error('Gagal menghapus file lama:', err);
            });
        }
        
        await Produk.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Produk berhasil dihapus' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};