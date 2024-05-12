module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'username',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password',
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'firstname',
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'lastname',
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'email',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
      },
    },
    {
      paranoid: true,
      timestamps: true,
      tableName: 'users',
    },
  );
  return User;
};
