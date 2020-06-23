
export default (sequelize, DataTypes) => {
  const Career = sequelize.define('Career', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });
  Career.associate = (models) => {
 
  };

  return Career;
};
