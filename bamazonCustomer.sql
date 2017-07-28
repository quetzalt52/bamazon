DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
use bamazon;
CREATE TABLE product(
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(5,2) NOT NULL, 
stock_quantity integer(10) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO product (item_id, product_name,department_name,price,stock_quantity)
VALUES(1,"Radha Beauty Dead Sea Mud Mask with Bentonite Clay 8.8 oz", "BEAUTY",10.95,15 );

INSERT INTO product (item_id, product_name,department_name,price,stock_quantity)
VALUES(2,"Argan Oil Hair Mask - Deep Conditioner with Organic Argan and Coconut Oil", "BEAUTY",12.95,25 );

INSERT INTO product (item_id, product_name,department_name,price,stock_quantity)
VALUES(3,"BenQ GW2270 21.5 Screen LED-Lit Monitor", "ELECTRONICS",89,10);

INSERT INTO product (item_id, product_name,department_name,price,stock_quantity)
VALUES(4,"Amazon Echo - White", "ELECTRONICS",129.99,30);

INSERT INTO product (item_id, product_name,department_name,price,stock_quantity)
VALUES(5,"Atkins Ready To Drink Shake, French Vanilla, 4 Count", "HEALTH & PERSONAL CARE",9.95,15);

INSERT INTO product (item_id, product_name,department_name,price,stock_quantity)
VALUES(6,"Medical Ear Thermometer with Forehead Function - iProven DMT-489", "HEALTH & PERSONAL CARE",33.30,10);

INSERT INTO product (item_id, product_name,department_name,price,stock_quantity)
VALUES(7,"Elmer's Liquid School Glue, Washable, 4 Ounces, 1 Count", "OFFICE PRODUCTS",3.55,50);

INSERT INTO product (item_id, product_name,department_name,price,stock_quantity)
VALUES(8,"EXPO Dry Erase Markers, Fine Point, Black, 12-Count", "OFFICE PRODUCTS",7.99,35);

INSERT INTO product (item_id, product_name,department_name,price,stock_quantity)
VALUES(9,"Pendaflex File Folders, Letter Size, 1/3 Cut, Manila, 100 per Box (752 1/3)", "OFFICE PRODUCTS",9.99,10);

INSERT INTO product (item_id, product_name,department_name,price,stock_quantity)
VALUES(10,"Clorox Scrubtastic Multi-Purpose Surface Scrubber and Cleaner", "HOME & KITCHEN",39.95,19);

INSERT INTO product (item_id, product_name,department_name,price,stock_quantity)
VALUES(11,"Taste of the Wild, Canine Formula", "PET SUPPLIES",49.99,19);