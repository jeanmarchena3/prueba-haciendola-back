const db = require('../database/models');

const {
  Product,
} = db;

exports.getAll = async () => {
  try {
    const products = await Product.findAll({});

    return products;
  } catch (e) {
    throw e;
  }
};

exports.get = async id => {
  try {
    const product = await Product.findOne({
      where: { id },
    });

    if (!product) {
      const error = {
        name: 'NO_ENCONTRADO',
      };
      throw error;
    }

    return product;
  } catch (e) {
    throw e;
  }
};

exports.create = async ({
  handle, title, description, sku, grams, stock, price, compare_price, barcode = '',
}) => {

  try {
    await Product.create({
      handle,
      title,
      description,
      sku,
      grams,
      stock,
      price,
      comparePrice: compare_price,
      barcode,
    });

    return { message: 'Producto creado exitosamente' };
  } catch (e) {
    throw e;
  }
};

exports.update = async ({
  id, handle, title, description, sku, grams, stock, price, compare_price, barcode = '',
}) => {
  try {

    const product = await Product.findOne({
      where: { id },
    });

    if (!product) {
      const error = {
        name: 'NO_ENCONTRADO',
      };
      throw error;
    }

    await Product.update(
      {
        handle,
        title,
        description,
        sku,
        grams,
        stock,
        price,
        comparePrice: compare_price,
        barcode,
      },
      { where: { id } },
    );

    return { message: 'Producto modificado exitosamente' };
  } catch (e) {
    throw e;
  }
};

exports.delete = async id => {
  try {

    await Product.destroy({ where: { id } });

    return { message: 'Producto eliminado exitosamente' };
  } catch (e) {
    throw e;
  }
};
