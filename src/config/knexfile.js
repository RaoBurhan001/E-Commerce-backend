const config  = require('./config')
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host:  config.get('db.host'),
      database:  config.get('db.name'),
      user:  config.get('db.username'),
      password:  config.get('db.password'),
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: '../migrations',
    },
    seeds: {
      directory: '../seeds/active',
      timestampFilenamePrefix: true,
    },
  },
};
