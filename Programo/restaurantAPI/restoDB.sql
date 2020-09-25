CREATE DATABASE `resto`;

CREATE TABLE `restaurant` (
  `ID_RESTO` int(11) NOT NULL,
  `ID_USER` int(11) NOT NULL,
  `NOM_RESTO` varchar(100) DEFAULT NULL,
  `ADRESSE` varchar(100) DEFAULT NULL,
  `TELEPHONE` varchar(100) DEFAULT NULL,
  `DESCRIPTIF` varchar(100) DEFAULT NULL,
  `IMAGE` varchar(100) DEFAULT NULL,
  `DATE_DERNIERE_MODIF` date DEFAULT NULL,
  `ACTIF` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin;