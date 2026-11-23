# UTS292102779 — Angular + AdminLTE 4

**Nama:** Faadhillah Destia Fitri  
**NIM:** 292102779  
**Kampus:** STMIK Pontianak  
**Program Studi:** Teknik Informatika  
**Mata Kuliah:** Pemrograman Mobile Web

Konfigurasi asset Angular sudah disesuaikan dengan source root `src` agar `ng serve` tidak gagal karena path asset `public`.

Project ini merupakan mobile web chat berbasis Angular dengan layout AdminLTE 4 dan Bootstrap 5.3. Tampilan dibuat responsif, terdiri dari header, sidebar, daftar kontak, area percakapan, input pesan, dan footer identitas.

## Persyaratan
- Node.js 20.19+ atau 22 LTS
- npm
- Visual Studio Code (disarankan)

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka folder `UTS292102779` di VS Code.
3. Buka terminal pada folder project.
4. Jalankan:
   ```bash
   npm install
   npm start
   ```
5. Buka alamat yang tampil di terminal (umumnya `http://localhost:4200`).

## Build
```bash
npm run build
```

## Struktur file utama
- `src/app/app.html` dan `src/app/app.ts` — komponen utama
- `src/app/header.html` dan `src/app/header.ts` — header
- `src/app/sidebar.html` dan `src/app/sidebar.ts` — sidebar
- `src/app/chat.html` dan `src/app/chat.ts` — tampilan dan fungsi chat
- `src/app/footer.html` dan `src/app/footer.ts` — footer nama dan NIM
- `src/styles.css` — penyesuaian tampilan responsif

## Catatan pengumpulan UTS
- Dependensi AdminLTE 4, Bootstrap, Bootstrap Icons, dan OverlayScrollbars diambil melalui npm. Koneksi internet diperlukan saat `npm install`.
- Screenshot harus diambil langsung dari project yang dijalankan di komputer: file-file utama, terminal saat `ng serve`/`npm start`, dan tampilan browser versi desktop/mobile. Simpan di folder `screenshots/`.
- Untuk backup GitHub: buat repository baru bernama `UTS292102779`, lalu hubungkan folder ini melalui GitHub Desktop dan lakukan Commit to main serta Push origin. Ambil screenshot GitHub Desktop dan halaman repository setelah berhasil.
- ZIP ini berisi source project, bukan bukti screenshot atau repository GitHub yang sudah dipublikasikan.


## Perbaikan kompatibilitas template
Template menggunakan getter `selectedInitials` di TypeScript (bukan arrow function di HTML Angular), dan binding sidebar menggunakan sintaks `[class.d-none]`.
