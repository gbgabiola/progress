-- TABLE
CREATE TABLE customers (
  id INT NOT NULL,
  first_name STRING,
  last_name STRING,
  address STRING,
  PRIMARY KEY (id)
  );
CREATE TABLE orders (
  id Int NOT NULL,
  order_number int,
  customer_id INT,
  product_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id)
  FOREIGN KEY (product_id) REFERENCES products(id)
 );
CREATE TABLE products (
  id INT NOT NULL,
  name STRING,
  price MONEY, stock int,
  PRIMARY KEY (id)
);
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
