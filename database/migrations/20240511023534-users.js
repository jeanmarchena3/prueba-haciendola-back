module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'username',
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'password',
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'firstname',
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'lastname',
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'email',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
      field: 'created_at',
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
      field: 'updated_at',
    },
    deletedAt: {
      type: Sequelize.DATE,
      field: 'deleted_at',
    },
  }),
  down: queryInterface => queryInterface.dropTable('users'),
};
