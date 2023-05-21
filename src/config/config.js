// config/db.config.js

const convict = require('convict');
const dotenv = require('dotenv');
const path = require('path');

const env = dotenv.config({ path: path.join(__dirname, '../../.env') });
const envVars = env.parsed;
const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  db: {
    client: {
      doc: 'Database client',
      format: String,
      default: envVars.DB_CLIENT,
      env: 'DB_CLIENT',
    },
    host: {
      doc: 'Database host name/IP',
      format: String,
      default: envVars.PG_HOST || 'localhost',
      env: 'DB_HOST',
    },
    port: {
      doc: 'Database port number',
      format: 'port',
      default: envVars.PG_PORT,
      env: 'DB_PORT',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: envVars.PG_DATABASE,
      env: 'DB_NAME',
    },
    username: {
      doc: 'Database username',
      format: String,
      default: envVars.PG_USER_NAME,
      env: 'DB_USERNAME',
    },
    password: {
      doc: 'Database password',
      format: String,
      default: envVars.PG_PASSWORD,
      env: 'DB_PASSWORD',
      sensitive: true, // Mark as sensitive to hide in logs
    },
  },
  jwt:{
    secret:{ 
      doc:"JWT secret Key",
      format:String,
      default: envVars.JWT_SECRET,
      env:"JWT_SECRET"
    }
  }
});

config.validate({ allowed: 'strict' });

module.exports = config;
