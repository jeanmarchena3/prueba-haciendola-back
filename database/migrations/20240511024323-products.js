module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('products', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    handle: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'handle',
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'title',
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
      field: 'description',
    },
    sku: {
      type: Sequelize.BIGINT,
      allowNull: false,
      field: 'sku',
    },
    grams: {
      type: Sequelize.FLOAT,
      allowNull: false,
      field: 'grams',
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'stock',
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      field: 'price',
    },
    compare_price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      field: 'compare_price',
    },
    barcode: {
      type: Sequelize.BIGINT,
      allowNull: true,
      field: 'barcode',
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
  down: queryInterface => queryInterface.dropTable('products'),
};
