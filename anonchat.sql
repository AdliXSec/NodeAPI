-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Nov 2024 pada 13.59
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
-- Database: `anonchat`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `message`
--

CREATE TABLE `message` (
  `id_msg` int(11) NOT NULL,
  `to_msg` varchar(500) NOT NULL,
  `msg` text NOT NULL,
  `date_msg` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `message`
--

INSERT INTO `message` (`id_msg`, `to_msg`, `msg`, `date_msg`) VALUES
(1, 'Adli', 'hai kamu sehat sehat ya disana jaga kesehatan, jaangan lupa makan dan minum', '16 November 2024'),
(2, 'wkwkwkw siapa ya', 'Semangat terus kuliahnya', '16-11-2024'),
(3, 'Naufal', 'istirahat jangan ngoding trs', '16-11-2024'),
(6, 'wikwok', 'awokaowkaowkaowakwo ajg', '16-11-2024 17:10:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(500) NOT NULL,
  `usermail` varchar(500) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `usermail`, `password`) VALUES
(2, 'wkwkkwkw', 'hahaah@gmail.com', '$2b$10$0VRPpNGREcWLmBU7VE5hYOy6Ukh3hBRAxPZaw/zag/JLoGMg3rjT.'),
(3, 'Adli 12', 'adli@gmail.com', '$2b$10$c9nNn7Ugk6ProuOosBy5B.8OS.bGegSsAQLw872IrOQxToZfMnXKu');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id_msg`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `message`
--
ALTER TABLE `message`
  MODIFY `id_msg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
