const CTS = require('./constants');

exports.okResponse = (res, httpCode, response) => res.status(httpCode).json(response);

exports.errorResponse = (res, name, extra) => {
  let error = CTS.ERRORS[name];
  error = error || CTS.DEFAULT_ERROR;
  return res.status(error.httpCode).json({
    error: {
      name,
      code: error.code,
      description: error.description,
      extra,
    },
  });
};

exports.updateOrCreate = async (model, where, newItem) => {
  try {
    const foundItem = await model.findOne({ where });
    if (!foundItem) {
      const item = await model.create(newItem);
      return { item, created: true };
    }
    const item = await model.update(newItem, { where });
    return { item, created: false };
  } catch (e) {
    throw e;
  }
};
