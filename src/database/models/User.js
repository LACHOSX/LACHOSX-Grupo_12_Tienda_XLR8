const { sequelize, DataTypes } = require("sequelize");

const UserCategory = require("./UserCategory");

module.exports = (sequelize, DataTypes) => {
    
    const alias = "User";
    const cols = {
                
        name: {
            type: DataTypes.STRING
        },        
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },        
        phone: {
            type: DataTypes.INTEGER
        },        
        password: {
            type: DataTypes.STRING
        },        
        birthday: {
            type: DataTypes.DATE
        },        
        genre: {
            type: DataTypes.STRING
        },        
        id_users_categories: {
            type: DataTypes.INTEGER,
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
        User.hasMany(models.PurchaseOrder, {
            as: "purchaseOrders",
            foreignKey: "user_id",            
        });
    }

    return User;
}
