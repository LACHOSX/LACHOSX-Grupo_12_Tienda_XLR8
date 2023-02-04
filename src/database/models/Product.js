const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    
    const alias = "Product";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        title: {
            type: dataTypes.STRING
        },
        photo1: {
            type: dataTypes.STRING,
        },
        photo2: {
            type: dataTypes.STRING,
        },
        photo3: {
            type: dataTypes.STRING,
        },
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        price_discount: {
            type: dataTypes.INTEGER
        },
        size: {
            type: dataTypes.STRING
        },
        color: {
            type: dataTypes.STRING
        },
        genre_product: {
            type: dataTypes.STRING
        },
        type: {
            type: dataTypes.STRING
        },
        new:{
            type: dataTypes.TINYINT
        },        
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },        
        deletedAt: {
            type: dataTypes.DATE
        }
    };
    const config = {
        tableName: "products",
        timestamps: {
            createdAt:{
                type: dataTypes.DATE
            },
            updatedAt:{
                type: dataTypes.DATE
            },
            deletedAt: {
                type: dataTypes.DATE
            }
        },
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {        
        Product.belongsTo(models.OrderProduct, {
            as: "orderProducts",
            foreignKey: "id_product",            
        })
    }

    return Product;
}