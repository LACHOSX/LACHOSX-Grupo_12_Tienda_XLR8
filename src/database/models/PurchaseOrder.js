const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const alias = "PurchaseOrder";
    const cols = {

        order_date: {
            type: dataTypes.DATE
        },
        order_value: {
            type: dataTypes.INTEGER
        },
        order_cart: {
            type: dataTypes.INTEGER
        },
        order_payment: {
            type: dataTypes.INTEGER
        },
        users_id: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        }
    };
    const config = {
        tableName: "purchase_orders",
        timestamps: false
    }

    const PurchaseOrder = sequelize.define(alias, cols, config);

    PurchaseOrder.associate = function (models) {
        PurchaseOrder.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id",
        })
        PurchaseOrder.belongsToMany(models.Product, {
            as: "purchaseOrders",
            through: "OrderProduct",
        });
    }

    return PurchaseOrder;
}