/* Creo Base de Datos para el WebServer */
CREATE DATABASE `webserverdb`;

/* Creo el usuario para esta prueba publica */
CREATE USER 'testwebserveruser' IDENTIFIED BY 'testwebserverpass';

/* Le concedo permisos para conectarse */
GRANT USAGE ON *.* TO 'testwebserveruser'@localhost IDENTIFIED BY 'testwebserverpass';
/* GRANT USAGE ON *.* TO 'testwebserveruser'@'%' IDENTIFIED BY 'testwebserverpass'; // Esto se usar en caso de que se requiera acceder fuera del localhost */

/* Se le da acceso al usuario a la Base de Datos */
GRANT ALL privileges ON `webserverdb`.* TO 'testwebserveruser'@localhost;

/* Aplico los cambios */
FLUSH PRIVILEGES;

/* Selecciono la Base de Datos */
USE webserverdb;

/* Creo trabla para las pruebas */
CREATE TABLE usuarios (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, /* ID auto incrementable seteado como primary key*/
  dni VARCHAR(20) UNIQUE, /* Seteo DNI como unico */
  nombre VARCHAR(100),
  apellido VARCHAR(100),
  email VARCHAR(100)
);

/* Inserto datos en la Tabla para realizar las pruebas */
INSERT INTO usuarios(dni, nombre, apellido, email)
  VALUES('39493125', 'Joaquin', 'Decima', 'joaquin.decima@gmail.com')
     ;

/* Muestro los datos */
SELECT * FROM usuarios;

/* Creo trabla para las pruebas */
CREATE TABLE empleos (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, /* ID auto incrementable seteado como primary key*/
  nombre VARCHAR(100),
  descripcion VARCHAR(100),
);

/* Inserto datos en la Tabla para realizar las pruebas */
INSERT INTO empleos(nombre, descripcion)
  VALUES('Contador', 'Identificar y gestionar costos y gastos')
     ;

/* Muestro los datos */
SELECT * FROM empleos;


