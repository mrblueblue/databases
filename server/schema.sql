CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  objectID Int,
  username varchar(50),
  text varchar(300),
  roomname varchar(25),
  createdAt timestamp,
);

-- create TABLE messages (objectID INT, username VARCHAR(50), text VARCHAR(300), roomname VARCHAR(25), createdAT TIMESTAMP);)

-- CREATE TABLE rooms (

-- );

-- CREATE TABLE users (

-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

