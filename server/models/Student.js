import * as bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    StudentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CareerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // matricula
    enrollment: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: { 
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }     
  });
  Student.associate = (models) => {
  };
  return Student;
};
