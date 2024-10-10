# Panduan Kontribusi Website Mabim RPL 2024

Terima kasih atas minat Anda untuk berkontribusi pada Website Mabim RPL 2024. Sebelum Anda melanjutkan, bacalah singkat hal-hal berikut:

- [Kode Etik](https://github.com/himarplupi/mabim-himarpl/blob/main/CODE_OF_CONDUCT.md)
- [Kontribusi](#kontribusi)
- [Memulai](#memulai)
  - [Perintah CLI](#perintah-cli)
- [Pedoman Commit](#pedoman-commit)
- [Kebijakan Pull Request](#kebijakan-pull-request)
- [Sertifikat Asal Pengembang 1.1](#sertifikat-asal-pengembang-11)

## Kontribusi

Setiap individu dipersilakan untuk berkontribusi pada Website Mabim RPL 2024. Repositori ini saat ini memiliki dua jenis persona kontribusi:

- **Kontributor** adalah setiap individu yang membuat isu/PR, mengomentari isu/PR, atau berkontribusi dengan cara lain.

- **Kolaborator** adalah setiap individu yang mereview isu/PR, mengelola isu/PR, atau berkontribusi dengan cara lain yang aktif dalam berdiskusi dan pengambilan keputusan dalam proyek ini.

## Memulai

Langkah-langkah di bawah ini akan memberi Anda gambaran umum tentang cara mempersiapkan lingkungan lokal Anda untuk Website Mabim RPL 2024 dan langkah-langkah umum untuk menyelesaikan sesuatu dan menyampaikan kontribusi Anda.

1. Klik tombol fork di kanan atas untuk menyalin [Repositori Website Mabim RPL 2024](https://github.com/himarplupi/mabim-himarpl/fork)

2. Clone fork Anda menggunakan SSH, GitHub CLI, atau HTTPS.

   ```bash
   git clone git@github.com:<NAMA_PENGGUNA_GITHUB_ANDA>/mabim-himarpl.git # SSH
   git clone https://github.com/<NAMA_PENGGUNA_GITHUB_ANDA>/mabim-himarpl.git # HTTPS
   gh repo clone <NAMA_PENGGUNA_GITHUB_ANDA>/mabim-himarpl # GitHub CLI
   ```

3. Pindah ke direktori mabim-himarpl.

   ```bash
   cd mabim-himarpl
   ```

4. Buat remote untuk menjaga fork dan clone lokal Anda tetap terbaru.

   ```bash
   git remote add upstream git@github.com:himarplupi/mabim-himarpl.git # SSH
   git remote add upstream https://github.com/himarplupi/mabim-himarpl.git # HTTPS
   gh repo sync himarplupi/mabim-himarpl # GitHub CLI
   ```

5. Buat cabang baru untuk pekerjaan Anda.

   ```bash
   git checkout -b nama-cabang-anda
   ```

6. Jalankan perintah berikut untuk menginstal dependensi dan memulai pratinjau lokal dari pekerjaan Anda.

   ```bash
   pnpm i # menginstal dependensi proyek ini
   pnpm run dev # memulai lingkungan pengembangan
   ```

7. Lakukan perubahan Anda.

8. Lakukan merge untuk menyinkronkan cabang Anda saat ini dengan cabang upstream.

   ```bash
   git fetch upstream
   git merge upstream/main
   ```

9. Jalankan `pnpm run lint` untuk memastikan bahwa linting dan format sudah sesuai.

   ```bash
   pnpm run lint
   ```

10. Setelah Anda puas dengan perubahan Anda, tambahkan dan commit perubahan tersebut ke cabang Anda, lalu push cabang tersebut ke fork Anda.

    ```bash
    cd ~/mabim-himarpl
    git add .
    git commit # Silakan ikuti pedoman commit di bawah ini
    git push -u origin nama-cabang-anda
    ```

> [!IMPORTANT]\
> Sebelum commit dan membuka Pull Request, harap baca terlebih dahulu [Pedoman Commit](#pedoman-commit) dan [Kebijakan Pull Request](#kebijakan-pull-request) yang dijelaskan di bawah ini.

11. Buat Pull Request.

> [!NOTE]\
> Kami meminta penulis PR untuk menghindari rebase/memperbarui PR mereka dengan cabang dasar (`main`) secara tidak perlu.

### Perintah CLI

Repositori ini berisi beberapa skrip dan perintah untuk melakukan berbagai tugas. Perintah yang paling relevan dijelaskan di bawah ini.

<details>
  <summary>Perintah untuk Menjalankan & Membangun Website</summary>

- `pnpm run dev` menjalankan Server Pengembangan Lokal Next.js, mendengarkan secara default di `http://localhost:3000/`.
- `pnpm run build` membangun Aplikasi dalam mode Produksi. Outputnya secara default berada di dalam folder `.next`.
  - Ini digunakan untuk Blog HIMARPL Vercel Deployments (Pratinjau & Produksi)
- `pnpm run start` memulai server web yang menjalankan konten yang dibangun dari `pnpm run build`

</details>

<details>
  <summary>Perintah untuk testing code styling</summary>

- `pnpm run lint` menjalankan linter untuk semua file.

</details>

## Pedoman Commit

Proyek ini mengikuti spesifikasi [Conventional Commits][].

Commit sangat direkomendasikan untuk ditandatangani. Anda bisa membaca lebih lanjut tentang [Penandatanganan Commit][] di sini.

### Pedoman Pesan Commit

- Pesan commit direkomendasikan untuk menyertakan "type" seperti yang dijelaskan pada Conventional Commits
- Pesan commit **tidak boleh** diakhiri dengan tanda titik `.`

## Kebijakan Pull Request

Kebijakan ini mengatur bagaimana kontribusi harus dilakukan dalam repositori ini. Baris di bawah ini menyatakan pemeriksaan dan kebijakan yang harus diikuti sebelum menggabungkan _(before merge)_ dan saat menggabungkan _(merge)_.

### Saat menggabungkan _(before merge)_

- Semua pemeriksaan Status yang diperlukan harus lulus.
- Pastikan bahwa semua diskusi telah diselesaikan.
- [`squash`][] pull request yang terdiri dari beberapa commit

## Sertifikat Asal Pengembang 1.1

```
Dengan berkontribusi pada proyek ini, saya menyatakan bahwa:

- (a) Kontribusi dibuat seluruhnya atau sebagian oleh saya dan saya memiliki hak untuk mengajukannya di bawah lisensi open source yang ditunjukkan dalam file; atau
- (b) Kontribusi didasarkan pada pekerjaan sebelumnya yang, sepengetahuan saya, dilindungi oleh lisensi open source yang sesuai dan saya memiliki hak di bawah lisensi tersebut untuk mengajukan pekerjaan tersebut dengan modifikasi, baik yang dibuat seluruhnya atau sebagian oleh saya, di bawah lisensi open source yang sama (kecuali saya diizinkan untuk mengajukannya di bawah lisensi yang berbeda), seperti yang ditunjukkan dalam file; atau
- (c) Kontribusi disediakan langsung kepada saya oleh orang lain yang menyatakan (a), (b) atau (c) dan saya tidak mengubahnya.
- (d) Saya memahami dan setuju bahwa proyek ini dan kontribusi adalah publik dan bahwa catatan kontribusi (termasuk semua informasi pribadi yang saya ajukan dengan kontribusi tersebut, termasuk tanda tangan saya) disimpan tanpa batas waktu dan dapat didistribusikan kembali sesuai dengan proyek ini atau lisensi open source yang terlibat.
```

[`squash`]: https://help.github.com/en/articles/about-pull-request-merges#squash-and-merge-your-pull-request-commits
[Conventional Commits]: https://www.conventionalcommits.org/
[Penandatanganan Commit]: https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits
