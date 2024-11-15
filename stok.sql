-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Nov 2024 pada 05.41
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stockvaksin`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `stok`
--

CREATE TABLE `stok` (
  `id_stok` int(11) NOT NULL,
  `uid_stok` varchar(500) NOT NULL,
  `nama_stok` varchar(500) NOT NULL,
  `stok` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `stok`
--

INSERT INTO `stok` (`id_stok`, `uid_stok`, `nama_stok`, `stok`) VALUES
(3, 'UIU-101', 'Influenza', '344'),
(4, 'UIU-102', 'Tdap', '450'),
(5, 'UIO-203', 'Hepatitis A dan B', '360'),
(6, 'UIO-204', 'HPV', '330'),
(7, 'UIU-105', 'Pneumokokus', '478'),
(8, 'UIU-106', 'Measles and Rubella (MR)', '679'),
(9, 'UIU-107', 'BCG', '239'),
(10, 'UIU-108', 'Cacar Air', '257'),
(11, 'UIU-109', 'Herpes zoster', '500'),
(12, 'UIU-200', 'COVID-19', '575'),
(13, '19', 'Adli', '2000'),
(14, '19-UID', 'ASX 00P', '275');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `stok`
--
ALTER TABLE `stok`
  ADD PRIMARY KEY (`id_stok`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `stok`
--
ALTER TABLE `stok`
  MODIFY `id_stok` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
