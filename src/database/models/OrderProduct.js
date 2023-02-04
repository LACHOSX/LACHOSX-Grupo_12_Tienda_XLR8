const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    
    const alias = "OrderProduct";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        
        id_product: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        },

        id_purchase_orders: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        }
    };
    const config = {
        tableName: "orders_products",
        timestamps: false
        }
    

    const OrderProduct = sequelize.define(alias, cols, config);

    OrderProduct.associate = function(models) {
        OrderProduct.hasMany(models.PurchaseOrder, {
            as: "purchaseOrders",
            foreignKey: "id_purchase_orders",            
        }),
        OrderProduct.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_product",            
        });
    }

    return OrderProduct;
}