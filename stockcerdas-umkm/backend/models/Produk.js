const mongoose = require('mongoose');

const produkSchema = new mongoose.Schema({
    sku: { type: String, required: true, unique: true },
    nama: { type: String, required: true },
    hargaBeli: { type: Number, required: true },
    hargaJual: { type: Number, required: true },
    stokSaatIni: { type: Number, default: 0 },
    stokMinimum: { type: Number, default: 5 },
    satuan: { type: String, required: true },
    fotoUrl: { type: String } 
}, { timestamps: true });

module.exports = mongoose.model('Produk', produkSchema);