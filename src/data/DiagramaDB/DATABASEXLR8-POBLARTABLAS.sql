LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES 
-- (id, name, last_name, email, phone, password, birthday, genre, id_users_categories) 
(1, 'Alejandro', 'Negri', 'alemnegri84@gmail.com', 1122926663, 'asd455', '2003-01-01', 'hombre', 1),
(2, 'Tadeo', 'Negri', 'tadeoab@gmail.com', 1122926663, 'asd455', '2000-03-03', 'hombre', 1),
(3, 'Nati', 'Admin', 'natiprofeadmin@gmail.com', 1166448855, 'natiadmin123', '2002-05-05', 'mujer', 1),
(4, 'Nati', 'Cliente', 'natiprofeuser@gmail.com', 1133559988, 'natiuser123', '2002-04-04', 'mujer', 2);
UNLOCK TABLES;
LOCK TABLES `users_categories` WRITE;
INSERT INTO `users_categories` VALUES 
-- (id, name)
(1, 'usuario'),
(2, 'admin');
UNLOCK TABLES;
LOCK TABLES `products` WRITE;
INSERT INTO `products` VALUES 
-- (id, title, photo1, description, price, price_discount, size, color, genre_product, type, new, createdAt, updatedAt, deletedAt)
(1, 'Remera Lisa', 'https://bit.ly/3xKfEG3', 'Remera Basica. Mangas Cortas. 100%algodon. Cuello redondo. Corte Regular', 2250, 10, 'small', 'negro', 'unisex', 'remera', 1),
(2, 'Short Sport', 'https://bit.ly/3XOzI4M', 'Short Deportivo. Bolsillos frontales. 100%algodon. Dry Fit. Corte Regular', 7299, 10, 'medium', 'azul', 'hombre', 'short', 1),
(3, 'Pantalon Jogger', 'https://bit.ly/3Evy6Ge', 'Pantalon Joggin. Bolsillos frontales. 100%algodon. Ultra comodo. Corte Chupin', 9999, 5, 'large', 'negro', 'mujer', 'pantalon', 0),
(4, 'Remera Dryfit', 'https://bit.ly/3xKfEG3', 'Remera Basica. Mangas Cortas. 100%algodon. Cuello redondo. Corte Regular', 2250, 10, 'small', 'negro', 'unisex', 'remera', 1),
(5, 'Short con calza', 'https://bit.ly/3XOzI4M', 'Short Deportivo. Bolsillos frontales. 100%algodon. Dry Fit. Corte Regular', 7299, 10, 'medium', 'azul', 'hombre', 'short', 1),
(6, 'Pantalon Sport', 'https://bit.ly/3Evy6Ge', 'Pantalon Joggin. Bolsillos frontales. 100%algodon. Ultra comodo. Corte Chupin', 9999, 5, 'large', 'negro', 'mujer', 'pantalon', 0),
(7, 'Remera Chomba', 'https://bit.ly/3xKfEG3', 'Remera Basica. Mangas Cortas. 100%algodon. Cuello redondo. Corte Regular', 2250, 10, 'small', 'negro', 'unisex', 'remera', 1),
(8, 'Short Jogger', 'https://bit.ly/3XOzI4M', 'Short Deportivo. Bolsillos frontales. 100%algodon. Dry Fit. Corte Regular', 7299, 10, 'medium', 'azul', 'hombre', 'short', 1),
(9, 'Pantalon Chupin Sport', 'https://bit.ly/3XOzI4M', 'Short Deportivo. Bolsillos frontales. 100%algodon. Dry Fit. Corte Regular', 7299, 10, 'medium', 'azul', 'hombre', 'short', 1),
(10, 'Remera Lady', 'https://bit.ly/3Evy6Ge', 'Pantalon Joggin. Bolsillos frontales. 100%algodon. Ultra comodo. Corte Chupin', 9999, 5, 'large', 'negro', 'mujer', 'pantalon', 0);
UNLOCK TABLES;
LOCK TABLES `purchase_orders` WRITE;
INSERT INTO `purchase_orders` VALUES 
-- (`id`,`order_date`,`order_value`,`order_cart`,`order_payment`,`users_id`)
(1,'2020-05-10',123,1,1,2),
(2,'2018-06-11',999,2,3,2),
(3,'2023-01-01',123,1,1,2);
UNLOCK TABLES;
LOCK TABLES `orders_products` WRITE;
INSERT INTO `orders_products` VALUES 
-- (id, id_product, id_purchase_orders)
(1, 1, 2),
(2, 2, 3);
UNLOCK TABLES;


