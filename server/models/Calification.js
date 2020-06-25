export default (sequelize, DataTypes) => {
  const Calification = sequelize.define('Calification', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    StudentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TeacherId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CourseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Note: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });
  Calification.associate = (models) => {
    // M:1
    Calification.belongsTo(models.Student, {
      as: 'students',
      foreignKey: 'CalificationId',
    });

  };

  return Calification;
};
