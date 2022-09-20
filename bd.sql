/* Creo Base de Datos para el WebServer */
CREATE DATABASE `webserverdb`;

/* Creo el usuario para esta prueba publica */
CREATE USER 'testwebserveruser8' IDENTIFIED BY 'testwebserverpass';

/* Le concedo permisos para conectarse */
GRANT USAGE ON *.* TO 'testwebserveruser8'@localhost IDENTIFIED BY 'testwebserverpass';
/* GRANT USAGE ON *.* TO 'testwebserveruser'@'%' IDENTIFIED BY 'testwebserverpass'; // Esto se usar en caso de que se requiera acceder fuera del localhost */

/* Se le da acceso al usuario a la Base de Datos */
GRANT ALL privileges ON `webserverdb`.* TO 'testwebserveruser8'@localhost;

/* Aplico los cambios */
FLUSH PRIVILEGES;

/* Selecciono la Base de Datos */
USE webserverdb;

/* Creo trabla para las pruebas */
CREATE TABLE personas (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, /* ID auto incrementable seteado como primary key*/
  dni VARCHAR(20) UNIQUE, /* Seteo DNI como unico */
  nombre VARCHAR(100),
  apellido VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

/* Inserto datos en la Tabla para realizar las pruebas */
INSERT INTO personas(dni, nombre, apellido, email)
  VALUES('39493125', 'Joaquin', 'Decima', 'joaquin.decima@gmail.com')
     ;

/* Muestro los datos */
SELECT * FROM personas;

/* Creo trabla para las pruebas */
CREATE TABLE credenciales (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, /* ID auto incrementable seteado como primary key*/
  usuario VARCHAR(100) ,
  pass VARCHAR(100),
  FOREIGN KEY(usuario) REFERENCES personas (email)
);

/* Inserto datos en la Tabla para realizar las pruebas */
INSERT INTO credenciales(usuario, pass)
  VALUES('joaquin.decima@gmail.com', 'joaquin123')
     ;

/* Muestro los datos */
SELECT * FROM credenciales;
