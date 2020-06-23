
export default (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
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
    SubjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Note: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },    
  });
  Note.associate = (models) => {
 
  };

  return Note;
};
