'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLogin = sequelize.define('UserLogin', {
    email: {
      type: DataTypes.STRING,
      field: 'email'
    },
    userName: {
      type: DataTypes.STRING,
      field: 'user_name'
    },
    password: {
      type:  DataTypes.STRING,
      field: 'password'
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      field: 'user_id',
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    underscored: true,
    tableName: 'user_login',
    timestamp: true
  });
  UserLogin.associate = function(models) {
    // associations can be defined here
    UserLogin.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return UserLogin;
};