const utils = require('../utils');
const productService = require('../services/product');

exports.getAll = async (req, res) => {
  try {

    const data = await productService.getAll();

    utils.okResponse(res, 200, data);
  } catch (err) {
    console.error(err);

    const name = err.name || 'ERROR_INTERNO';
    const extra = err.extra || '';

    utils.errorResponse(res, name, extra);
  }
};

exports.get = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await productService.get(id);

    utils.okResponse(res, 200, data);
  } catch (err) {
    console.error(err);

    const name = err.name || 'ERROR_INTERNO';
    const extra = err.extra || '';

    utils.errorResponse(res, name, extra);
  }
};

exports.create = async (req, res) => {
  try {

    const {
      handle, title, description, sku, grams, stock, price, compare_price, barcode = '',
    } = req.body;

    const data = await productService.create({
      handle, title, description, sku, grams, stock, price, compare_price, barcode,
    });

    utils.okResponse(res, 200, data);
  } catch (err) {
    console.error(err);

    const name = err.name || 'ERROR_INTERNO';
    const extra = err.extra || '';

    utils.errorResponse(res, name, extra);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      handle, title, description, sku, grams, stock, price, compare_price, barcode = '',
    } = req.body;

    const data = await productService.update({
      id, handle, title, description, sku, grams, stock, price, compare_price, barcode,
    });

    utils.okResponse(res, 200, data);
  } catch (err) {
    console.error(err);

    const name = err.name || 'ERROR_INTERNO';
    const extra = err.extra || '';

    utils.errorResponse(res, name, extra);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await productService.delete(id);

    utils.okResponse(res, 200, data);
  } catch (err) {
    console.error(err);

    const name = err.name || 'ERROR_INTERNO';
    const extra = err.extra || '';

    utils.errorResponse(res, name, extra);
  }
};
