CREATE DATABASE storedb;

use storedb;

CREATE TABLE invoice (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100),
    address varchar(255),
    invoice_number VARCHAR(255),
    total DECIMAL(8,2) NOT NULL,
    invoice_date TIMESTAMP DEFAULT NOW()
);

CREATE TABLE invoice_line (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quantity INT NOT NULL,
    item VARCHAR(255) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    amount DECIMAL(8,2) NOT NULL,
    invoice_id INT,
    FOREIGN KEY (invoice_id) REFERENCES invoice(id)
);


