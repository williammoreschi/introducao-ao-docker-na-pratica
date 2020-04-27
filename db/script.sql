CREATE DATABASE IF NOT EXISTS dockernapratica;
USE dockernapratica;
CREATE TABLE IF NOT EXISTS users (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100),
  PRIMARY KEY (id)
);
INSERT INTO users (name,email) VALUE ('Jake Peralta', 'jack.peralta@brooklynninenine.com');
INSERT INTO users (name, email) VALUE ('Amy Santiago', 'amy.santiago@brooklynninenine.com');
INSERT INTO users (name, email) VALUE ('Ray Holt', 'ray.holt@brooklynninenine.com');