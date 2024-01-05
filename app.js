const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware untuk parsing body dari request
app.use(bodyParser.json());

// Penyimpanan data sederhana (gunakan database sesungguhnya untuk proyek produksi)
const formDataStorage = [];

// Endpoint untuk menerima data formulir dari frontend
app.post('/api/form', (req, res) => {
    const formData = req.body;

    // Validasi data formulir (opsional)
    if (!formData.name || !formData.email || !formData.phone) {
        return res.status(400).json({ error: 'Harap isi semua field formulir.' });
    }

    // Simpan data formulir ke penyimpanan sederhana
    formDataStorage.push(formData);

    // Kirim respons berhasil
    res.status(201).json({ message: 'Data formulir berhasil disimpan.' });
});

// Endpoint untuk mengembalikan data formulir yang telah disimpan
app.get('/api/form', (req, res) => {
    // Kirim data formulir yang telah disimpan
    res.status(200).json(formDataStorage);
});

// Mulai server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
