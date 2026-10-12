ig_unfollow_check# 🔍 Instagram Unfollower Checker

A modern, fast, and 100% privacy-focused web application to analyze who doesn't follow you back on Instagram using your official exported JSON data. 

*Aplikasi web modern, cepat, dan aman 100% menjaga privasi untuk menganalisis siapa saja yang tidak follow back akun Instagram kamu menggunakan file ekspor resmi `.json`.*

---

## ⚡ Features / Fitur Utama

- **🔒 100% Privacy-First**: All processing happens client-side in your browser. No credentials, passwords, or data are ever sent to any server.
- **⚡ Fast & Safe**: Zero risk of account suspension/ban compared to scrapers or third-party login tools.
- **🎯 Flexible Drag & Drop**: Easily drop both `followers` and `following` JSON files without worrying about exact filenames.
- **🔎 Instant Search & Export**: Search usernames and export the un-followers list to a `.txt` file with one click.

---

## 🚀 Section 1: Usage via Web (Hosted on Vercel) / *Penggunaan via Web (Vercel Live)*

### 🇬🇧 English

1. **Export Your Data from Instagram**:
   - Go to **Instagram Settings & Privacy** > **Accounts Center** > **Your Information and Permissions** > **Download Your Information**.
   - Select **Some of your information** > **Followers and following**.
   - Choose format as **JSON** and submit the download request.
   - Once downloaded, extract the ZIP file to find `followers_1.json` and `following.json`.

2. **Analyze Your Data on the Web App**:
   - Open the live web app link (e.g., `https://your-app-name.vercel.app`).
   - Drag & drop your `followers` file and `following` file into their respective dropboxes.
   - The app will instantly display total followers, following count, and a list of accounts that don't follow you back.
   - Click **Unfollow ↗** on any user to visit their profile directly, or click **Export TXT** to save the list.

---

### 🇮🇩 Bahasa Indonesia

1. **Ekspor Data dari Instagram**:
   - Buka **Pengaturan & Privasi Instagram** > **Pusat Akun** > **Informasi dan Izin Anda** > **Unduh Informasi Anda**.
   - Pilih **Sebagian informasi Anda** > **Pengikut dan mengikuti**.
   - Atur Format ke **JSON**, lalu kirim permintaan unduh.
   - Ekstrak file ZIP yang diunduh untuk mendapatkan file `followers_1.json` dan `following.json`.

2. **Analisis Data di Aplikasi Web**:
   - Buka tautan web app kamu (contoh: `https://nama-app-kamu.vercel.app`).
   - *Drag & drop* (seret dan lepas) file `followers` dan file `following` ke kotak yang tersedia.
   - Aplikasi akan langsung menampilkan statistik total *followers*, *following*, serta daftar akun yang tidak membalas *follow* kamu.
   - Klik **Unfollow ↗** untuk membuka profil pengguna secara langsung, atau klik **Ekspor TXT** untuk menyimpan daftarnya.

---

## 💻 Section 2: Local Setup via Git Clone / *Instalasi Lokal via Git Clone*

### 🇬🇧 English

#### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/) installed on your machine

#### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/USERNAME_ANDA/NAMA_REPO_ANDA.git
   cd NAMA_REPO_ANDA
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to the URL shown in your terminal (usually `http://localhost:5173`).

---

### 🇮🇩 Bahasa Indonesia

#### Prasyarat
- [Node.js](https://nodejs.org/) (versi 16 atau lebih baru)
- [Git](https://git-scm.com/) terinstal di komputer/laptop kamu

#### Langkah-langkah

1. **Kloning repository**:
   ```bash
   git clone https://github.com/USERNAME_ANDA/NAMA_REPO_ANDA.git
   cd NAMA_REPO_ANDA
   ```

2. **Instal dependensi project**:
   ```bash
   npm install
   ```

3. **Jalankan local development server**:
   ```bash
   npm run dev
   ```

4. **Buka di Browser**:
   Buka alamat URL yang muncul di terminal kamu (biasanya `http://localhost:5173`).

---

## 🛠️ Tech Stack / *Teknologi yang Digunakan*

- **React.js** (JSX)
- **Vite**
- **Tailwind CSS**
- **PostCSS & Autoprefixer**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).