import * as bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {

  const UserSubject = sequelize.define('UserSubject', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SubjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });
  UserSubject.associate = (models) => {

  };
  // Method 3 via the direct method
  UserSubject.beforeCreate((userSubject, options) => {

  });
  return UserSubject;
};