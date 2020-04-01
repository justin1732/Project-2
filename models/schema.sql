 
DROP DATABASE IF EXISTS fooddb;
CREATE DATABASE fooddb;
use fooddb;
create table users (
  id int(11) not null auto_increment,
  userName VARCHAR(45) not NULL,
  password VARCHAR(45) not NULL,
  createdAt TIMESTAMP NOT NULL default now() on update now(),
  updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (id)
) ;
