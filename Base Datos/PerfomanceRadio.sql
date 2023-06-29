CREATE DATABASE performance_radio;
USE performance_radio;
CREATE TABLE `servicio` (
  `id_servicio` INT(11) AUTO_INCREMENT,
  `nombre_servicio` VARCHAR(100),
  `precio_hora` DOUBLE(22,2),
  PRIMARY KEY (`id_servicio`)
);

CREATE TABLE `oyente` (
  `username` VARCHAR(100),
  `contrasena` VARCHAR(100),
  `nombre_oyente` VARCHAR(100),
  `apellido_oyente` VARCHAR(100),
  `email_oyente` VARCHAR(100),
  `pais_oyente` VARCHAR(100),
  PRIMARY KEY (`username`)
);

CREATE TABLE `locutor` (
  `id_locutor` INT(11) AUTO_INCREMENT,
  `nombre_locutor` VARCHAR(100),
  `apellido_locutor` VARCHAR(100),
  `email_locutor` VARCHAR(100),
  `pais_locutor` VARCHAR(100),
  `programa_locutor` VARCHAR(100),
  `horas_disponibles` INT(3),
  PRIMARY KEY (`id_locutor`)
);

CREATE TABLE `contrato` (
  `id_contrato` INT(11) AUTO_INCREMENT,
  `fecha` DATETIME,
  `id_servicio` INT(11),
  `cantidad_horas` INT(3),
  `valor_contrato` DOUBLE(22,2),
  `id_locutor` INT(11),
  `username` VARCHAR(100),
  PRIMARY KEY (`id_contrato`),
  FOREIGN KEY (`id_servicio`) REFERENCES `servicio`(`id_servicio`),
  FOREIGN KEY (`username`) REFERENCES `oyente`(`username`),
  FOREIGN KEY (`id_locutor`) REFERENCES `locutor`(`id_locutor`)
);

INSERT INTO oyente VALUES ('usuario1', 'password123', 'User', 'Primero', 'user.user@user.com', 'userlandia');
