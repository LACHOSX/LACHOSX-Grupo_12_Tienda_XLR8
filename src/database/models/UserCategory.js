const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    
    const alias = "UserCategory";
    const cols = {
        
        name: {
            type: DataTypes.STRING
        }
    };
    const config = {
        tableName: "users_categories",
        timestamps: false
    };

    const UserCategory = sequelize.define(alias, cols, config);

    UserCategory.associate = function(models) {
        UserCategory.hasMany(models.User, {
            as: "users",
            foreignKey: "id_users_categories",            
        });
    }

    return UserCategory;
}