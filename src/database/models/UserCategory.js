module.exports = (sequelize, dataTypes) => {
    
    const alias = "Users_categories";
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