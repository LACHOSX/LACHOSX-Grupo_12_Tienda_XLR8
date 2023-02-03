module.exports = (sequelize, dataTypes) => {
    
    const alias = "Customers";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
        name: {
            type: dataTypes.STRING
        },        
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },        
        phone: {
            type: dataTypes.INTEGER
        },        
        password: {
            type: dataTypes.STRING
        },        
        birthday: {
            type: dataTypes.DATE
        },        
        genre: {
            type: dataTypes.STRING
        },        
        id_customers_categories: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        }
    };
    const config = {
        tableName: "customers",
        timestamps: false
        },
    }

    const Customer = sequelize.define(alias, cols, config);

    Customer.associate = function(models) {
        Customer.belongsTo(models.CustomerCategory, {
            as: "categoria",
            foreignKey: "customer_category_id",            
        });
    }

    return Customer;
}