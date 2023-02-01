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
        
        admission: {
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
        timestamps: {
            
            createdAt:{
                type: DataTypes.DATE
            },
            updatedAt:{
                type: DataTypes.DATE
            }
        },
    }

    const Customer = sequelize.define(alias, cols, config);

    return Customer;
}