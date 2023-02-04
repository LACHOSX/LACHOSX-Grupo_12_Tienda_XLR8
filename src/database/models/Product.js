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
            type: dataTypes.DATENOW
        },
        updatedAt: {
            type: dataTypes.DATENOW
        },        
        deletedAt: {
            type: dataTypes.DATENOW
        }
    };
    const config = {
        tableName: "products",
        timestamps: {
            createdAt:{
                type: dataTypes.DATENOW
            },
            updatedAt:{
                type: dataTypes.DATENOW
            },
            deletedAt: {
                type: dataTypes.DATENOW
            }
        },
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {        
        Product.belongsTo(models.OrderProducts, {
            as: "orderProducts",
            foreignKey: "id_product",            
        }),
        Product.belongsTo(models.ProductPhoto, {
            as: "productPhotos",
            foreignKey: "id_product_photo",            
        });
    }

    return Product;
}