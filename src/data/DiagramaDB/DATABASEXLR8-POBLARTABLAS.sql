INSERT INTO `users` VALUES 
-- (id, name, last_name, email, phone, password, birthday, genre, id_users_categories) 
(1, 'Alejandro', 'Negri', 'alemnegri84@gmail.com', 1122926663, 'ale12345', '1984-10-10', 'Masculino', 2),
(2, 'Tadeo', 'Negri', 'tadeoab@gmail.com', 1122926663, 'tadeo123', '2001-02-08', 'Masculino', 2),
(3, 'Nati', 'Admin', 'natiadmin@gmail.com', 1166448855, 'natiadmin123', '1986-06-01', 'Femenino', 2),
(4, 'Nati', 'Cliente', 'natiuser@gmail.com', 1133559988, 'natiuser123', '1983-04-02', 'Femenino', 1),
(5, 'user', 'prueba', 'user@dh.com', 12345648, '$2a$10$TF4toiaXsUTFx3IvSDPdHOzcLxp2N.FiXb5xrdAWhGdO/zRlnALRi', '2023-03-15', 'Masculino', 1),
(6, 'admin', 'prueba', 'admin@dh.com', 123456789, '$2a$10$ygAmp9PEZyO43bMVVcScOeU8KIGWBga2H1PsCbBPymE/VqeEC3fqq', '2023-03-15', 'Sin genero', 2);

INSERT INTO `users_categories` VALUES 
-- (id, name)
(1, 'usuario'),
(2, 'admin');

INSERT INTO `products` VALUES 
-- (id, title, photo1, description, price, price_discount, size, color, genre_product, type, new, createdAt, updatedAt, deletedAt)
(1, 'Remera Lisa', 'https://bit.ly/3xKfEG3', 'Remera Basica. Mangas Cortas. 100%algodon. Cuello redondo. Corte Regular', 2250, 10, 'small', 'negro', 'unisex', 'remera', 1),
(2, 'Short Sport', 'https://bit.ly/3XOzI4M', 'Short Deportivo. Bolsillos frontales. 100%algodon. Dry Fit. Corte Regular', 7299, 10, 'medium', 'azul', 'hombre', 'short', 1),
(3, 'Pantalon Jogger', 'https://bit.ly/3Evy6Ge', 'Pantalon Joggin. Bolsillos frontales. 100%algodon. Ultra comodo. Corte Chupin', 9999, 0, 'large', 'negro', 'mujer', 'pantalon', 0),
(4, 'Remera Dryfit', 'https://bit.ly/3m2xAcr', 'Remera Dryfit. Este producto está hecho parcialmente con Parley Ocean Plastic. Solo una de las innovaciones que representan el compromiso de adidas de ayudar a acabar con los residuos plásticos.', 4250, 0, 'small', 'blanco', 'unisex', 'remera', 1),
(5, 'Short con calza', 'https://bit.ly/3ILBcbA', 'Hechas para corredoras que no se conforman, estas calzas dos en uno incorporan dos capas que trabajan juntas. Las calzas ajustadas tejidas ofrecen abrigo y compresión. Comodidad y cobertura. Slim Fit.', 9299, 15, 'medium', 'negro', 'mujer', 'short', 1),
(6, 'Pantalon Sport', 'https://bit.ly/3Zk91Gl', 'Pantalón Casual para Hombre LACOSTE Pantalon De Survetement Principal: 83% Algodón 17% Poliéster.', 18999, 20, 'large', 'color', 'hombre', 'pantalon', 0),
(7, 'Remera Chomba', 'https://bit.ly/3IpPZr9', 'Remera Chomba. Con un ajuste impecable y protección solar UPF 50 para mantenerte protegida durante largas horas bajo el sol, esta chomba es es ideal para estar fresca cuando pescás, navegás y en cualquier situación activa.', 8250, 25, 'small', 'color', 'mujer', 'remera', 1),
(8, 'Short Jogger', 'https://bit.ly/3ExbxRk', 'Short Jogger. Bermuda Bengalina Elastizada Hombre Cintura Elastizada Con Bolsillos. Corte Regular.', 8299, 0, 'medium', 'azul', 'hombre', 'short', 1),
(9, 'Pantalon Chupin Sport', 'https://bit.ly/3Zip1bA', 'Para el deporte o para el tiempo libre: Un pantalón que se destaca por su comodidad. Con corte entallado y elastizado, con cintura elástica con cordón corredizo cuyos extremos están realizados en goma negra.', 7299, 10, 'medium', 'blanco', 'hombre', 'pantalon', 1),
(10, 'Remera Lady', 'https://bit.ly/3Et2Ibd', 'Remera Sport Mujer. La tecnología UA Microthread en la tela se seca más rápido, no se adhiere a ti, no se irrita y se estira sin absorber el sudor.', 5999, 0, 'large', 'negro', 'mujer', 'remera', 0);

INSERT INTO `purchase_orders` VALUES 
-- (`id`,`order_date`,`order_value`,`order_cart`,`order_payment`,`users_id`)
(1,'2020-05-10',123,1,1,2),
(2,'2018-06-11',999,2,3,2),
(3,'2023-01-01',123,1,1,2);


INSERT INTO `orders_products` VALUES 
-- (id, id_product, id_purchase_orders)
(1, 1, 2),
(2, 2, 3);



