const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const db = require('../database/models');

const {
  User,
} = db;

exports.login = async ({ username, password }) => {
  try {
    const existUser = await User.findOne({
      where: { username },
    });

    if (existUser) {
      const {
        password: passwordResult, username, firstname, lastname, email,
      } = existUser;

      if (bcrypt.compareSync(password, passwordResult)) {

        const token = jwt.sign({ username, email }, config.get('jwt.secret'), {
          expiresIn: config.get('jwt.expirationTime'),
        });

        return {
          username, firstname, lastname, email, token,
        };
      }
    }

    const error = {
      name: 'CREDENCIALES_INCORRECTAS',
    };
    throw error;

  } catch (e) {
    throw e;
  }
};

exports.create = async ({
  username, password, firstname, lastname, email,
}) => {
  try {
    const existUsername = await User.findOne({
      where: { username },
    });

    if (existUsername) {
      const error = {
        name: 'USUARIO_YA_REGISTRADO',
      };
      throw error;
    }

    const existEmail = await User.findOne({
      where: { email },
    });

    if (existEmail) {
      const error = {
        name: 'EMAIL_YA_REGISTRADO',
      };
      throw error;
    }

    await User.create({
      username,
      password: bcrypt.hashSync(password.toString()),
      firstname,
      lastname,
      email: email.toLowerCase(),
    });

    return { message: 'Usuario creado exitosamente' };
  } catch (e) {
    throw e;
  }
};

exports.changePassword = async ({ username, old_password, new_password }) => {
  try {
    const existUser = await User.findOne({
      where: { username },
    });

    if (existUser) {
      const {
        password: passwordResult,
      } = existUser;

      if (bcrypt.compareSync(old_password, passwordResult)) {

        await User.update(
          {
            password: bcrypt.hashSync(new_password.toString()),
          },
          { where: { username } },
        );

        return {};
      }
    }

    const error = {
      name: 'CREDENCIALES_INCORRECTAS',
    };
    throw error;

  } catch (e) {
    throw e;
  }
};

exports.verifyUsernameEmail = async ({
  username, email,
}) => {
  try {
    const existUser = await User.findOne({
      where: { username, email },
    });

    if (existUser) {
      return { check: true };
    }

    const error = {
      name: 'CREDENCIALES_INCORRECTAS',
    };
    throw error;

  } catch (e) {
    throw e;
  }
};

exports.changePasswordForgot = async ({ username, password }) => {
  try {
    const existUser = await User.findOne({
      where: { username },
    });

    if (existUser) {
      await User.update(
        {
          password: bcrypt.hashSync(password.toString()),
        },
        { where: { username } },
      );

      return {};
    }

    const error = {
      name: 'CREDENCIALES_INCORRECTAS',
    };
    throw error;

  } catch (e) {
    throw e;
  }
};
