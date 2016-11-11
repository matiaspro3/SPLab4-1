-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-10-2016 a las 18:38:39
-- Versión del servidor: 10.1.10-MariaDB
-- Versión de PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `abm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `dni` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `sexo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `partido` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `foto` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `dni`, `fecha`, `sexo`, `partido`, `foto`, `nombre`, `apellido`) VALUES
(5, '222222', '', '', '', '222222.jpg', 'Bañera', 'Giratoria'),
(6, '888888', '', '', '', '888888.jpg', 'Julieta', 'Roberto'),
(7, '777777', '', '', '', '777777.jpg', 'Tomas', 'Crucero'),
(8, '999999', '', '', '', '999999.jpg', 'Alfredo', 'Mercurio'),
(9, '555555', '', '', '', '555555.jpg', 'Jaime', 'Marrón'),
(10, '111111', '', '', '', '111111.jpg', 'Esteban', 'Trabajos'),
(12, '444444', '', '', '', '444444.jpg', 'Miguel', 'Zorro'),
(15, '123456', '2016-11-10', 'm', 'Peronismo', '123456.JPG', '', ''),
(16, '45454545', '2016-01-11', 'f', 'Radicalismo', '45454545.jpg', '', ''),
(17, '556655', '2016-12-31', 'f', 'Peronismo', '556655.jpg', '', ''),
(18, '556655', '2016-12-31', 'f', 'Peronismo', '556655.jpg', '', ''),
(19, '556655', '2016-12-31', 'f', 'Peronismo', '556655.jpg', '', ''),
(51, '21222222', '2016-01-01', 'f', 'Radicalismo', '21222222.jpg', '', ''),
(52, '2.2222222222222E+26', '2016-12-31', 'm', 'Radicalismo', '2.2222222222222E+26.jpg', '', ''),
(53, '32456789', '2016-01-01', 'f', 'Peronismo', '32456789.jpg', '', ''),
(54, '232323', '2016-12-31', 'f', 'Peronismo', '232323.jpg', '', ''),
(55, '998877', '2016-01-31', 'f', 'Radicalismo', '998877.jpg', '', ''),
(56, '232323', '2016-01-01', 'm', 'Radicalismo', '232323.jpg', '', ''),
(57, '456789', '2016-01-01', 'm', 'Peronismo', '456789.jpg', '', ''),
(58, '2.3232222222222E+14', '2016-01-01', 'f', 'Peronismo', '2.3232222222222E+14.', '', ''),
(60, '213456', '2016-01-01', 'f', 'Radicalismo', 'marvel-character-composit.jpg', '', ''),
(61, '121222', '2016-02-01', 'm', 'Radicalismo', 'konachan-com-64207-animated-remilia_scarlet-touhou', '', ''),
(62, '17565565', '2016-01-01', 'm', 'Peronismo', 'n1485037049_235469_6568.jpg', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
