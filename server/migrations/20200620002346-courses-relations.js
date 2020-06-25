/* eslint-disable indent */
module.exports = {
  up(queryInterface) {
    return queryInterface.addConstraint(
        'Courses', ['TeacherId'], {
          type: 'foreign key',
          name: 'fk_Courses_TeacherId',
          references: {
            table: 'Teachers', // name of Target model
            field: 'id', // key in Target model that we're referencing
          },
          onDelete: 'CASCADE',
          allowNull: false,
        },
      );
  },
  down(queryInterface) {
    return queryInterface.removeConstraint('Courses', 'fk_Courses_TeacherId');
  },
};