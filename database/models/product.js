module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      handle: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'handle',
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'title',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'description',
      },
      sku: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: 'sku',
      },
      grams: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'grams',
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'stock',
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'price',
      },
      comparePrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'compare_price',
      },
      barcode: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'barcode',
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
      tableName: 'products',
    },
  );
  return Product;
};
