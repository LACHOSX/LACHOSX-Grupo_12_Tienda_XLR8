LOCK TABLES `customers` WRITE;
INSERT INTO `customers` VALUES 
-- (id, name, last_name, email, phone, password, admission, genre, customers_categories) 
(1, 'Alejandro', 'Negri', 'alemnegri84@gmail.com', 1122926663, 'asd455', '2003-01-01', 'hombre', 1),
(2, 'Tadeo', 'Negri', 'tadeoab@gmail.com', 1122926663, 'asd455', '2000-03-03', 'hombre', 1),
(3, 'Nati', 'Admin', 'natiprofeadmin@gmail.com', 1166448855, 'natiadmin123', '2002-05-05', 'mujer', 1),
(4, 'Nati', 'Cliente', 'natiprofeuser@gmail.com', 1133559988, 'natiuser123', '2002-04-04', 'mujer', 2);
UNLOCK TABLES;
LOCK TABLES `customers_categories` WRITE;
INSERT INTO `customers_categories` VALUES 
-- (id, name, created, updated, deleted)
(1, 'usuario',  '2018-02-03', '2019-05-08', '1'),
(2, 'admin', '2018-02-03', '2019-04-06', '1');
UNLOCK TABLES;
LOCK TABLES `products` WRITE;
INSERT INTO `products` VALUES 
-- (id, title, description, price, price_discount, size, color, category, type, brand,  id_purchase_order, id_product_photo)
(1, 'remera adidas', 'remera en venta', 1299, '10', 'medium', 'negro', 'hombre', 'remera', 'adidas', 1, 1),
(2, 'buzo adidas', 'buzo en venta', 3299, '10', 'medium', 'azul', 'unisex', 'buzo', 'adidas', 2, 2),
(3, 'remera nike', 'remera en venta', 1899, '5', 'large', 'blanco', 'mujer', 'remera', 'nike', 3, 3);
UNLOCK TABLES;
LOCK TABLES `purchase_orders` WRITE;
INSERT INTO `purchase_orders` VALUES 
-- (`id`,`order_date`,`order_value`,`order_cart`,`order_payment`,`shipping_payment`,`customers_id`)
(1,'2020-05-10',123,1,1,1,2),
(2,'2018-06-11',999,2,3,4,2),
(3,'2023-01-01',123,1,1,1,2);
UNLOCK TABLES;
LOCK TABLES `orders_products` WRITE;
INSERT INTO `orders_products` VALUES 
-- (id, id_product, id_purchase_orders)
(1, 1,  2),
(2, 2, 3);
UNLOCK TABLES;
LOCK TABLES `products_photos` WRITE;
INSERT INTO `products_photos` VALUES 
-- (id, photo)
(1, 'https://www.google.com/aclk?sa=l&ai=DChcSEwjo_rStu9z8AhXUT0gAHVp7B-UYABABGgJjZQ&sig=AOD64_2E_rbSynKCHCBNrBkCbOBeoJqKaQ&adurl&ctype=5&ved=2ahUKEwibo8usu9z8AhXNILkGHUDgDoYQvhd6BAgBEG4'),
(2, 'https://www.google.com/aclk?sa=l&ai=DChcSEwjpq9O4u9z8AhUXZJEKHVP-BNoYABABGgJjZQ&sig=AOD64_2RTpCWmY9i8MON92RugGlwDKFgxw&adurl&ctype=5&ved=2ahUKEwjoq8q4u9z8AhWYOLkGHX_MCzcQwg96BAgBEGs'),
(3, 'https://www.stockcenter.com.ar/remera-nike-sportswear/NI_AR5004-660_XL_1.html');
UNLOCK TABLES;


