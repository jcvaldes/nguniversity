
export default (sequelize, DataTypes) => {
  const Campus = sequelize.define('Campus', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    CityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });
  Campus.associate = (models) => {
 
  };

  return Campus;
};
