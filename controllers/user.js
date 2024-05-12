const utils = require('../utils');
const userService = require('../services/user');

exports.login = async (req, res) => {
  try {
    const { username = '', password = '' } = req.body;

    const data = await userService.login({ username, password });

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
      username = '', password = '', firstname = '', lastname = '', email = '',
    } = req.body;

    const data = await userService.create({
      username, password, firstname, lastname, email,
    });

    utils.okResponse(res, 200, data);
  } catch (err) {
    console.error(err);

    const name = err.name || 'ERROR_INTERNO';
    const extra = err.extra || '';

    utils.errorResponse(res, name, extra);
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { old_password = '', new_password = '' } = req.body;

    const { username } = req.auth;

    const data = await userService.changePassword({
      username, old_password, new_password,
    });

    utils.okResponse(res, 200, data);
  } catch (err) {
    console.error(err);

    const name = err.name || 'ERROR_INTERNO';
    const extra = err.extra || '';

    utils.errorResponse(res, name, extra);
  }
};

exports.verifyUsernameEmail = async (req, res) => {
  try {
    const { username = '', email = '' } = req.body;

    const data = await userService.verifyUsernameEmail({ username, email });

    utils.okResponse(res, 200, data);
  } catch (err) {
    console.error(err);

    const name = err.name || 'ERROR_INTERNO';
    const extra = err.extra || '';

    utils.errorResponse(res, name, extra);
  }
};

exports.changePasswordForgot = async (req, res) => {
  try {
    const { new_password: password = '', username = '' } = req.body;

    const data = await userService.changePasswordForgot({
      username, password,
    });

    utils.okResponse(res, 200, data);
  } catch (err) {
    console.error(err);

    const name = err.name || 'ERROR_INTERNO';
    const extra = err.extra || '';

    utils.errorResponse(res, name, extra);
  }
};
