export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('users', 'locale', {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'en',
  });
}

export async function down(queryInterface) {
  await queryInterface.removeColumn('users', 'locale');
}
