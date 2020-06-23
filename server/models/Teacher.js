import * as bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    TeacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CampusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: { 
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    
  });
  Student.associate = (models) => {
  };
  return Student;
};
