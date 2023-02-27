const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        title: {
            type: DataTypes.STRING
        },
        photo1: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        price_discount: {
            type: DataTypes.INTEGER
        },
        size: {
            type: DataTypes.STRING
        },
        color: {
            type: DataTypes.STRING
        },
        genre_product: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        new: {
            type: DataTypes.TINYINT
        },

    }, {
        tableName: "products", //nombre de la tabla (es opcional si tienen los mismos nombres)        
        timestamps: false /*Opciones si no ponemos created_at y updated_at nos va a tratar de llenar esa columna por eso le ponemos el timestamps*/,

    });
    
    Product.associate = function (models) {
        Product.belongsToMany(models.PurchaseOrder, {
            as: "purchaseOrders",
            through: "OrderProduct"
        })
    }

    return Product;
}