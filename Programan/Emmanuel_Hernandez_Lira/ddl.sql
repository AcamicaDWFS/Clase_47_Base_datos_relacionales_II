CREATE DATABASE musica;
USE musica;

CREATE TABLE Bandas (
  id INT UNSIGNED AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  integrantes VARCHAR(500) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_separacion DATE,
  pais VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Albumes (
  id INT UNSIGNED AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  banda_id INTEGER UNSIGNED NOT NULL,
  fecha_publicacion DATE NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(banda_id) REFERENCES Bandas(id)
);

CREATE TABLE Canciones (
  id INT UNSIGNED AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  duracion INT UNSIGNED NOT NULL,
  album_id INT UNSIGNED NOT NULL,
  banda_id INT UNSIGNED NOT NULL,
  fecha_publicacion DATE NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(banda_id) REFERENCES Bandas(id),
  FOREIGN KEY(album_id) REFERENCES Albumes(id)
);
