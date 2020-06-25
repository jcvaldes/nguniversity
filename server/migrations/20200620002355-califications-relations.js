/* eslint-disable indent */
module.exports = {
  up(queryInterface) {
    return queryInterface.addConstraint(
        'Califications', ['StudentId'], {
          type: 'foreign key',
          name: 'fk_Califications_StudentId',
          references: {
            table: 'Students', // name of Target model
            field: 'id', // key in Target model that we're referencing
          },
          onDelete: 'CASCADE',
          allowNull: false,
        },
      ), queryInterface.addConstraint(
        'Califications', ['TeacherId'], {
          type: 'foreign key',
          name: 'fk_Califications_TeacherId',
          references: {
            table: 'Teachers', // name of Target model
            field: 'id', // key in Target model that we're referencing
          },
          onDelete: 'CASCADE',
          allowNull: false,
        },
      ), queryInterface.addConstraint(
        'Califications', ['CourseId'], {
          type: 'foreign key',
          name: 'fk_Califications_CourseId',
          references: {
            table: 'Courses', // name of Target model
            field: 'id', // key in Target model that we're referencing
          },
          onDelete: 'CASCADE',
          allowNull: false,
        },
      );
  },
  down(queryInterface) {
    return queryInterface.removeConstraint('Califications', 'fk_Califications_StudentId'),
      queryInterface.removeConstraint('Califications', 'fk_Califications_TeacherId'),
      queryInterface.removeConstraint('Califications', 'fk_Califications_CourseId');
  },
};