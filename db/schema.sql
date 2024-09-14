DROP DATABASE IF EXISTS backend_traning;
CREATE DATABASE backend_traning;

\c backend_traning;


CREATE TABLE products_example (
   id SERIAL PRIMARY KEY, 
   name VARCHAR(32) NOT NULL,
   price INT NOT NULL,
   brand VARCHAR(15),
   model VARCHAR(15),
   description TEXT, 
   condition VARCHAR(10) NOT NUL
);