const UserCategory = require("./UserCategory");

module.exports = (sequelize, dataTypes) => {
    
    const alias = "User";
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
        id_users_categories: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        }
    };
    const config = {
        tableName: "users",
        timestamps: false
        };
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.UserCategory, {
            as: "usersCategories",
            foreignKey: "id_users_categories",            
        }),
        User.belongsTo(models.PurchaseOrder, {
            as: "purchaseOrders",
            foreignKey: "user_id",            
        });
    }

    return User;
}