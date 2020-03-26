DROP DATABASE IF EXISTS fooddb;
CREATE DATABASE fooddb;

DROP table IF EXISTS Pantry;
CREATE TABLE foodstorage (
  id int(11) NOT NULL AUTO_INCREMENT,
 food varchar(45) not null,
 calories int not null,
 PRIMARY KEY (id)
) ;
DROP table IF EXISTS CookBook;
CREATE TABLE cooking (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(45) DEFAULT NULL,
  Ref varchar(5) DEFAULT NULL,
  PRIMARY KEY (id)
) ;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
