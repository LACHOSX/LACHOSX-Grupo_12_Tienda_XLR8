module.exports = (sequelize, dataTypes) => {
    
    const alias = "Customers_categories";
    const cols = {
        
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        
        name: {
            type: dataTypes.STRING
        },
        
        created: {
            type: dataTypes.DATE
        },

        updated: {
            type: dataTypes.DATE
        },
        
        deleted: {
            type: dataTypes.DATE
        },
        
    };
    const config = {
        tableName: "customers_categories",
        timestamps: {
            
            createdAt:{
                type: DataTypes.DATE
            },
            updatedAt:{
                type: DataTypes.DATE
            },
            deletedAt: {
                type: DataTypes.DATE
            }
        },
    }

    const CustomerCategory = sequelize.define(alias, cols, config);

    return CustomerCategory;
}