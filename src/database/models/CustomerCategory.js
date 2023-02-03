module.exports = (sequelize, dataTypes) => {
    
    const alias = "Customers_categories";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING
        }
    };
    const config = {
        tableName: "customers_categories",
        timestamps: false
        },
    }

    const CustomerCategory = sequelize.define(alias, cols, config);

    return CustomerCategory;
}