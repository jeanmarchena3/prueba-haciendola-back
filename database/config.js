const config = require('../config');

let optionsDB = {
  database: config.get('db.name'),
  username: config.get('db.user'),
  password: config.get('db.password'),
  dialect: config.get('db.dialect'),
  host: config.get('db.host'),
  port: config.get('db.port'),
  dialectOptions: {
    socketPath: config.get('db.socketPath'),
  },
  pool: {
    max: config.get('db.pool.max'),
    min: config.get('db.pool.min'),
    acquire: config.get('db.pool.acquire'),
    idle: config.get('db.pool.idle'),
  },
  logging: false,
  migrationStorageTableName: 'sequelizemeta',
};

if (config.get('env') === 'prod') {
  optionsDB = {
    ...optionsDB,
    logging: false,
    dialectOptions: {
      ssl: 'Amazon RDS',
    },
  };
}

module.exports = {
  [config.get('env')]: optionsDB,
};
