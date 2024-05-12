const convict = require('convict');

// Define a schema
const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['prod', 'dev'],
    default: 'dev',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The application port.',
    format: 'port',
    default: 10000,
    env: 'PORT',
  },
  jwt: {
    secret: {
      doc: 'Secret key',
      format: String,
      default: 'abcde',
      env: 'SECRET',
    },
    expirationTime: {
      doc: 'Expiration time for token',
      format: String,
      default: '1h',
      env: 'EXPIRATION_TIME',
    },
  },

  db: {
    host: {
      doc: 'Database host name/IP',
      format: String,
      default: '',
      env: 'DB_HOST',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: '',
      env: 'DB_NAME',
    },
    user: {
      doc: 'The db username.',
      format: String,
      default: '',
      env: 'DB_USER',
    },
    password: {
      doc: 'The db password.',
      format: String,
      default: '',
      env: 'DB_PASSWORD',
    },
    socketPath: {
      doc: 'The db socket path.',
      format: String,
      default: '',
      env: 'DB_SOCKET_PATH',
    },
    port: {
      doc: 'The db port.',
      format: 'port',
      default: '',
      env: 'DB_PORT',
    },
    dialect: {
      doc: 'The dialect of the DBMS.',
      format: String,
      default: '',
      env: 'DB_DIALECT',
    },
    pool: {
      max: {
        doc: 'The max pool connection to DBMS.',
        format: 'int',
        default: '',
        env: 'DB_MAX_CONNECTION',
      },
      min: {
        doc: 'The min pool connection to DBMS.',
        format: 'int',
        default: '',
        env: 'DB_MIN_CONNECTION',
      },
      acquire: {
        doc: 'The acquire pool connection to DBMS.',
        format: 'int',
        default: '',
        env: 'DB_ACQUIRE',
      },
      idle: {
        doc: 'The idle pool connection to DBMS.',
        format: 'int',
        default: '',
        env: 'DB_IDLE',
      },
    },
  },
  cors: {
    urls: {
      doc: 'The urls access cors.',
      format: String,
      default: '',
      env: 'CORS_URLS',
    },
  },
});

// The next two lines must be uncommented to run the migrations locally
const env = config.get('env');
config.loadFile(`./env/${env}.json`);

// Perform validation
config.validate({ allowed: 'warn' });

module.exports = config;
