# 📸 Panduan Mengganti Foto Portfolio

## Lokasi Foto
Foto tersimpan di: `public/images/profile.png`

## 3 Tempat Foto Digunakan dalam Kode

### 1️⃣ About Section (Baris ~272)
```jsx
<img src="/images/profile.png" alt="Profile" 
     className="w-full h-[500px] object-cover object-top" />
```
**Deskripsi**: Foto besar di About section, foto kiri - text kanan
**Ukuran**: Full width, height 500px
**Crop**: `object-top` (fokus ke bagian atas/wajah)

### 2️⃣ Contact Section - Profile Card (Baris ~356)
```jsx
<img src="/images/profile.png" alt="Profile" 
     className="w-24 h-24 rounded-full border-4 border-gray-700 
                group-hover:border-purple-500 transition-all 
                object-cover object-top" />
```
**Deskripsi**: Foto kecil circular di contact info card
**Ukuran**: 96x96px (w-24 h-24)
**Style**: Rounded full (circle), border purple saat hover

## 🔧 Cara Mengganti Foto

### Opsi 1: Ganti File (Recommended)
1. Letakkan foto baru Anda di folder `public/images/`
2. Rename foto menjadi `profile.png` (atau sesuaikan nama di kode)
3. Refresh browser

### Opsi 2: Edit Kode
Cari dan ganti semua instance:
```jsx
src="/images/profile.png"
```
Dengan path foto baru Anda:
```jsx
src="/images/foto-saya.jpg"
```

## ⚙️ Pengaturan Crop

### Untuk fokus ke wajah:
```jsx
object-cover object-top
```

### Untuk fokus ke tengah:
```jsx
object-cover object-center
```

### Untuk menampilkan full foto:
```jsx
object-contain
```

## 📁 Struktur Folder
```
portfolio-project/
├── public/
│   └── images/
│       └── profile.png  ← FOTO ANDA DI SINI
├── src/
│   └── App.jsx         ← KODE YANG MENGGUNAKAN FOTO
```

## ✅ Checklist
- [x] Foto di `public/images/profile.png`
- [x] About section (line ~272)
- [x] Contact section (line ~356)
- [x] Crop settings: `object-cover object-top`

## 🎨 Tips
- Gunakan foto dengan aspect ratio portrait (3:4 atau 2:3)
- Resolusi minimal: 800x1000px
- Format: JPG, PNG, atau WebP
- Background gelap/hitam lebih cocok dengan tema dark
