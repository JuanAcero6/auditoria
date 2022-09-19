/*USE webserverdb;
DROP TABLE usuarios;
DROP DATABASE webserverdb;
DROP USER 'testwebserveruser'@'localhost';

*/
USE webserverdb;

CREATE TABLE empleos (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, /* ID auto incrementable seteado como primary key*/
  nombre VARCHAR(100),
  descripcion VARCHAR(100)
);

/* Inserto datos en la Tabla para realizar las pruebas */
INSERT INTO empleos(nombre, descripcion)
  VALUES('Contador', 'Identificar y gestionar costos y gastos')
     ;

/* Muestro los datos */
SELECT * FROM empleos;