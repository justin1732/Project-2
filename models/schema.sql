  
DROP DATABASE IF EXISTS fooddb;
CREATE DATABASE fooddb;
use fooddb;



CREATE TABLE foodstorage (
  id int(11) NOT NULL AUTO_INCREMENT,
 food varchar(45) not null,
 calories int not null,
 PRIMARY KEY (id)
) ;

CREATE TABLE cooking (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(45) not NULL,
  Ref varchar(5) not NULL,
  PRIMARY KEY (id)
) ;

create table users (
  id int(11) not null auto_increment,
  userName VARCHAR(45) not NULL,
  password VARCHAR(45) not NULL,
  created_at TIMESTAMP NOT NULL default now() on update now(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (id)
) ;
use fooddb;
insert into users (userName, password)
values ("Someone", "Password")