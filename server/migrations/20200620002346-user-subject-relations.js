/* eslint-disable indent */
module.exports = {
  up(queryInterface) {
    return queryInterface.addConstraint(
        'UserSubjects', ['UserId'], {
          type: 'foreign key',
          name: 'fk_UserSubjects_UserId',
          references: {
            table: 'Users', // name of Target model
            field: 'id', // key in Target model that we're referencing
          },
          onDelete: 'CASCADE',
          allowNull: false,
        },
      ), queryInterface.addConstraint(
        'UserSubjects', ['SubjectId'], {
          type: 'foreign key',
          name: 'fk_UserSubjects_SubjectId',
          references: {
            table: 'Subjects', // name of Target model
            field: 'id', // key in Target model that we're referencing
          },
          onDelete: 'CASCADE',
          allowNull: false,
        },
      );
  },
  down(queryInterface) {
    return queryInterface.removeConstraint('UserSubjects', 'fk_UserSubjects_UserId'),
      queryInterface.removeConstraint('UserSubjects', 'fk_UserSubjects_SubjectId');
  },
};