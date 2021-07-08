const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.employee, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.team = require("./team.model")(sequelize, Sequelize);
db.employees = require("./employee.model")(sequelize, Sequelize);


db.teams.belongsToMany(db.employees, {
  through: "employee_team",
  as: "employees",
  foreignKey: "team_id",
});
db.employees.belongsToMany(db.teams, {
  through: "employee_team",
  as: "teams",
  foreignKey: "employee_id",
});

module.exports = db;
