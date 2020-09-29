CREATE DATABASE music;
USE music;

CREATE TABLE Bands (
  id INT UNSIGNED AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  members VARCHAR(500) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  country VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Albums (
  id INT UNSIGNED AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  band_id INTEGER UNSIGNED NOT NULL,
  release_date DATE NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(band_id) REFERENCES Bands(id)
);

CREATE TABLE Songs (
  id INT UNSIGNED AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  duration INT UNSIGNED NOT NULL,
  album_id INT UNSIGNED NOT NULL,
  band_id INT UNSIGNED NOT NULL,
  release_date DATE NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(band_id) REFERENCES Bands(id),
  FOREIGN KEY(album_id) REFERENCES Albums(id)
);
