import * as bcrypt from 'bcryptjs'

export default (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {timestamps: false})
  Student.associate = (models) => {
    Student.belongsTo(models.User, {
      foreignKey: 'UserId',
      targetKey: 'id',
    })
    // M:M
    Student.belongsToMany(models.Course, {
      through: { model: models.Inscription },
      as: 'inscriptions',
      foreignKey: 'StudentId',
    })
  }
  return Student
}
