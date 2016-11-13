-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2016 a las 00:37:08
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
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `legajo` varchar(50) NOT NULL,
  `sexo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id`, `nombre`, `legajo`, `sexo`) VALUES
(3, 'pepe', '1345', 'm'),
(5, 'Mars', '6987', 'F'),
(7, 'Lolo', '2587', 'M'),
(9, 'Mars23d', '698', 'F'),
(10, 'matias14', '3456', 'F'),
(11, 'matias32', '996667', 'm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cds`
--

CREATE TABLE `cds` (
  `id` int(11) NOT NULL,
  `titel` varchar(50) NOT NULL,
  `interpret` varchar(50) NOT NULL,
  `jahr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cds`
--

INSERT INTO `cds` (`id`, `titel`, `interpret`, `jahr`) VALUES
(1, 'ola', 'mundo', 2015),
(3, 'olaaa', 'mundo3', 2017);

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
(64, '333333', '2016-12-31', 'm', 'Peronismo', '333333.jpg', '', ''),
(68, '1212', '2016-12-31', 'f', 'Radicalismo', '1212.jpg', '', ''),
(70, '36666666', '1984-03-01', 'f', 'Radicalismo', 'pordefecto.png', '', ''),
(71, '36567134', '1991-11-16', 'f', 'Peronismo', '36567134.jpg', '', ''),
(72, '32999999', '1997-11-11', 'm', 'Radicalismo', '32999999.jpg', '', ''),
(73, '36666777', '1981-01-01', 'f', 'Peronismo', 'pordefecto.png', '', ''),
(74, '454545', '1977-10-10', 'm', 'Radicalismo', '454545.jpg', '', ''),
(75, '7878', '1996-01-01', 'f', 'Peronismo', '7878.jpg', '', ''),
(76, '222222', '1978-05-28', 'm', 'Peronismo', 'pordefecto.png', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`codigo`, `nombre`) VALUES
(1, 'Windows'),
(2, 'linux'),
(3, 'ubuntu');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` int(11) NOT NULL,
  `foto` varchar(50) DEFAULT NULL,
  `tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `email`, `pass`, `foto`, `tipo`) VALUES
(1, 'admin@admin.com', 1234, 'imagenes/20160712033818.jpg ', 'admin'),
(3, 'otro@otro.com', 1234, 'imagenes/20160712033755.jpg ', 'comp'),
(5, 'admin2@admin.com', 1234, NULL, 'admin'),
(6, 'otro@otros.com', 1234, NULL, 'otro'),
(7, 'bebu@otro.com', 1122, NULL, 'otro'),
(8, 'achin@admin.com', 1122, NULL, 'admin'),
(9, 'otro3@otro.com', 1234, NULL, 'otro'),
(10, 'admin3@admin.com', 1234, NULL, 'admin'),
(11, 'lola@lolita.com', 1222, NULL, 'comp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(50) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `dni` int(11) NOT NULL,
  `password` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `pathfoto` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `dni`, `password`, `tipo`, `mail`, `pathfoto`) VALUES
(2, 'lala', 5656, 2222, '', '', ''),
(3, 'lolo', 789, 1234, '', '', ''),
(4, 'matias', 32935835, 4444, '', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cds`
--
ALTER TABLE `cds`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumno`
--
ALTER TABLE `alumno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `cds`
--
ALTER TABLE `cds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
