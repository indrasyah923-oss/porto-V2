# 🌟 Portfolio React + Tailwind

Portfolio website modern dengan React dan Tailwind CSS, dilengkapi dengan background blur bergerak, multi-bahasa, dan efek grayscale pada project.

## ✨ Fitur

- 🎨 **Background Blur Bergerak** - Efek blur yang mengikuti cursor
- 🌍 **Multi-bahasa** - Support Bahasa Indonesia dan English
- 🖼️ **Efek Grayscale** - Gambar project hitam-putih yang berubah warna saat hover
- 📊 **Status Project** - Menampilkan status "Ongoing" atau "Finished"
- 📱 **Responsive Design** - Tampil sempurna di semua device
- ⚡ **Smooth Animations** - Transisi dan animasi yang halus
- 🎯 **Modern UI/UX** - Desain modern dengan gradient dan glassmorphism

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js (v16 atau lebih baru)
- npm atau yarn

### Instalasi

1. Extract folder project
2. Buka terminal di folder project
3. Install dependencies:
```bash
npm install
```

4. Jalankan development server:
```bash
npm run dev
```

5. Buka browser dan akses:
```
http://localhost:5173
```

### Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

### Preview Production Build

```bash
npm run preview
```

## 📁 Struktur Project

```
portfolio-project/
├── src/
│   ├── App.jsx          # Komponen utama portfolio
│   ├── main.jsx         # Entry point React
│   └── index.css        # Global styles + Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── README.md           # Dokumentasi
```

## 🎨 Kustomisasi

### Menambah/Edit Konten Multi-bahasa

Edit object `content` di `src/App.jsx`:

```javascript
const content = {
  id: {
    // Konten Bahasa Indonesia
  },
  en: {
    // Konten Bahasa Inggris
  }
};
```

### Menambah/Edit Project

Edit array `projects` di `src/App.jsx`:

```javascript
const projects = [
  {
    id: 1,
    name: {
      id: 'Nama Project Indonesia',
      en: 'Project Name English'
    },
    description: {
      id: 'Deskripsi Indonesia',
      en: 'English Description'
    },
    image: 'URL_GAMBAR',
    status: 'finished', // atau 'ongoing'
    tech: ['React', 'Node.js']
  }
];
```

### Menambah/Edit Skills

Edit array `skills` di `src/App.jsx`:

```javascript
const skills = [
  'JavaScript', 'React', 'Node.js', 
  // Tambah skills lainnya
];
```

### Ganti Informasi Pribadi

1. **Nama & Title**: Edit di object `content`
2. **Email**: Edit link di section Contact
3. **Social Media**: Edit href di bagian Contact
4. **Copyright**: Edit di Footer section

## 🛠️ Teknologi yang Digunakan

- **React 18** - UI Library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📝 Catatan

- Gambar project menggunakan Unsplash (ganti dengan gambar Anda sendiri)
- Warna theme bisa diubah di Tailwind classes
- Smooth scrolling sudah aktif secara default
- Support dark mode by default

## 🤝 Kontribusi

Feel free untuk fork dan customize sesuai kebutuhan!

## 📄 License

MIT License - Bebas digunakan untuk project pribadi maupun komersial

---

Dibuat dengan ❤️ menggunakan React & Tailwind CSS
