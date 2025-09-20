const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mirarestorasyon Backend Çalışıyor!');
});

// Örnek API endpoint (frontend için)
app.get('/api/services', (req, res) => {
  res.json([
    { id: 1, name: "Restorasyon" },
    { id: 2, name: "Yapı Güçlendirme" },
    { id: 3, name: "İç-Dış Dekorasyon" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend ${PORT} portunda çalışıyor.`);
});