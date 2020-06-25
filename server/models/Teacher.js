import * as bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
  }, {timestamps: false});
  Teacher.associate = (models) => {
    Teacher.hasMany(models.Course, {
      foreignKey: 'TeacherId',
    });

  };
  return Teacher;
};
