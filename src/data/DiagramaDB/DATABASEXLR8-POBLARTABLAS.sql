INSERT INTO `users` VALUES 
-- (id, name, last_name, email, phone, password, birthday, genre, id_users_categories) 
(1, 'Sergio', 'Digital', 'sergio@dh.com', 1144558866, '$2a$10$kg9QmdF3JMsJWp8ZE60Y5OitElffE8GmK2sZXYXjcI.X6zFtYOVUy', '1984-10-10', 'Masculino', 0),
(2, 'Daniel', 'Digital', 'daniel@dh.com', 1122338877, '$2a$10$EA1IA86Xu6KUTKNWMBTvjugHOfpk1LN2Y7rlxPn.w.GIP.SXe.wu.', '2001-02-08', 'Masculino', 0),
(3, 'Tadeo', 'Rodriguez', 'tadeo@dh.com', 1166448855, '$2a$10$3DnvNrvteGk5G62Wgjs67.dZbbEzVmIqhc2LXSDdmEUUVhqUQtuGu', '1986-06-01', 'Masculino', 0),
(4, 'John', 'Anderson', 'anderson@dh.com', 1133559988, '$2a$10$LwQW/jtaNqAaezJLXeJNUeNOanYjgkCE.EKfheJZL6o2NZxlPCEBK', '1983-04-02', 'Femenino', 0),
(5, 'Juan Pablo', 'Paillet', 'juanp@dh.com', 1166448855, '$2a$10$CBpd1ZSwokxQ6sEin.sysuhaM8su64tVA5O0p5hPGu423bj59Knhm', '1986-06-01', 'Masculino', 0),
(6, 'Ximena', 'Camacho', 'xime@dh.com', 1133559988, '$2a$10$I6WWi6t4V5Lo.8w7is.n7eBPvc5pBHfmEDrce5rH0vXE4By9C5ZGS', '1983-04-02', 'Femenino', 0),
(7, 'Natalia', 'Krivanek', 'nati@dh.com', 1133559988, '$2a$10$MHWEqesO23X7GpgsM.RArOTUVYSu3tIrHSXmIO.42rx7ap/bPj83C', '1983-04-02', 'Femenino', 0),
(8, 'Cliente', 'User', 'user@dh.com', 12345648, '$2a$10$TF4toiaXsUTFx3IvSDPdHOzcLxp2N.FiXb5xrdAWhGdO/zRlnALRi', '1989-03-15', 'Masculino', 1),
(9, 'Admin', 'Prueba', 'admin@dh.com', 123456789, '$2a$10$ygAmp9PEZyO43bMVVcScOeU8KIGWBga2H1PsCbBPymE/VqeEC3fqq', '1994-03-15', 'Sin genero', 2),
(10, 'Nati', 'User', 'natiuser@dh.com', 113456686, '$2a$10$E4Kn6F6CBN5l.ZV7XNDmpudd51EGjPEq2I2E2vZLORQm1tkNp9WNq', '1980-03-15', 'Femenino', 1),
(11, 'Nati', 'Admin', 'natiadmin@dh.com', 113456700, '$2a$10$bBdKRpouyEe4daOLIck1g.pqK4VQx4UTYge6S4NyxddLZGCJsHhjO', '1981-03-15', 'Femenino', 2);

INSERT INTO `users_categories` VALUES 
-- (id, name)
(1, 'usuario'),
(2, 'admin');

INSERT INTO `products` VALUES 
-- (id, title, photo1, description, price, price_discount, size, color, genre_product, type, new, createdAt, updatedAt, deletedAt)
(1, 'Remera Lisa', 'https://bit.ly/3xKfEG3', 'Remera Basica. Con un ajuste impecable y protección solar UPF 50 para mantenerte protegida durante largas horas bajo el sol. Mangas Cortas. 100%algodon. Corte Regular', 2250, 10, 'small', 'negro', 'unisex', 'remera', 1),
(2, 'Short Sport', 'https://bit.ly/3XOzI4M', 'Short Deportivo. La tecnología UA Microthread en la tela se seca más rápido. Cintura Elastizada Con Bolsillos frontales. 100%algodon. Dry Fit. Corte Regular', 7299, 10, 'medium', 'azul', 'hombre', 'short', 1),
(3, 'Pantalon Jogger', 'https://bit.ly/3Evy6Ge', 'Pantalon Joggin. La tecnología UA Microthread en la tela se seca más rápido. Bolsillos frontales. 100%algodon. Ultra comodo. Comodidad y cobertura. Corte Chupin', 9999, 0, 'large', 'negro', 'mujer', 'pantalon', 0),
(4, 'Remera Dryfit', 'https://bit.ly/3m2xAcr', 'Remera Dryfit. Este producto está hecho parcialmente con Parley Ocean Plastic. Solo una de las innovaciones que representan ayudar a acabar con los residuos plásticos.', 4250, 0, 'small', 'blanco', 'unisex', 'remera', 1),
(5, 'Short con calza', 'https://bit.ly/3ILBcbA', 'Hechas para corredoras que no se conforman, estas calzas dos en uno incorporan dos capas que trabajan juntas. Las calzas ajustadas tejidas ofrecen abrigo y compresión.', 9299, 15, 'medium', 'negro', 'mujer', 'short', 1),
(6, 'Pantalon Sport', 'https://bit.ly/3Zk91Gl', 'Pantalón Casual para Hombre. La tecnología UA Microthread en la tela se seca más rápido. Pantalon De Survetement Principal: 83% Algodón 17% Poliéster.', 18999, 20, 'large', 'color', 'hombre', 'pantalon', 0),
(7, 'Remera Chomba', 'https://bit.ly/3IpPZr9', 'Remera Chomba. Con un ajuste impecable y protección solar UPF 50 para mantenerte protegida durante largas horas bajo el sol, esta chomba es es ideal para cualquier situación activa.', 8250, 25, 'small', 'color', 'mujer', 'remera', 1),
(8, 'Short Jogger', 'https://bit.ly/3ExbxRk', 'Short Jogger. Bermuda Bengalina Elastizada. La tecnología UA Microthread en la tela se seca más rápido. Cintura Elastizada Con Bolsillos. Corte Regular.', 8299, 0, 'medium', 'azul', 'hombre', 'short', 1),
(9, 'Pantalon Chupin Sport', 'https://bit.ly/3Zip1bA', 'Para el deporte o para el tiempo libre: Un pantalón que se destaca por su comodidad. Con corte entallado y elastizado, con cintura elástica con cordón corredizo cuyos extremos están realizados en goma negra.', 7299, 10, 'medium', 'blanco', 'hombre', 'pantalon', 1),
(10, 'Remera Lady', 'https://bit.ly/3Et2Ibd', 'Remera Sport Mujer. La tecnología UA Microthread en la tela se seca más rápido, no se adhiere a ti, no se irrita y se estira sin absorber el sudor.', 5999, 0, 'large', 'negro', 'mujer', 'remera', 0);

INSERT INTO `purchase_orders` VALUES 
-- (`id`,`order_date`,`order_value`,`order_cart`,`order_payment`,`users_id`)
(1,'2020-05-10',25999,1,1,7),
(2,'2018-06-11',32569,2,3,6),
(3,'2023-01-01',11250,3,1,5);


INSERT INTO `orders_products` VALUES 
-- (id, id_product, id_purchase_orders)
(1, 1, 2),
(2, 2, 3);



