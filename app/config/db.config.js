module.exports = {
  HOST: "localhost",
  USER: "momji",
  PASSWORD: "password",
  DB: "momji",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
