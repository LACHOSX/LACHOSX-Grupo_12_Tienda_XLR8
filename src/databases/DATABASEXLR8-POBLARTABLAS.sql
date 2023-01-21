LOCK TABLES `purchase_orders` WRITE;
INSERT INTO `purchase_orders` VALUES 
-- (id, order_date, order_value, order_cart, order_payment, shipping_payment, customers_id) 
(3, 2023-01-01, 123, 1, 1, 1, 2),
(2, 1999-01-01, 999, 2, 3, 4, 2);
