const { sequelize, DataTypes } = require("sequelize");
const Product = require('./Product');

module.exports = (sequelize, DataTypes) => {
    
    const alias = "OrderProduct";
    const cols = {                
        id_product: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        id_purchase_orders: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        }
    };
    const config = {
        tableName: "orders_products",
        timestamps: false
        }
    const OrderProduct = sequelize.define(alias, cols, config);

    

    return OrderProduct;
}