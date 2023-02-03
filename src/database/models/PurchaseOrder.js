module.exports = (sequelize, dataTypes) => {
    
    const alias = "Purchase_orders";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
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
        customers_id: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        }
    };
    const config = {
        tableName: "purchase_orders",
        timestamps: false
    }

    const PurchaseOrder = sequelize.define(alias, cols, config);

    return PurchaseOrder;
}