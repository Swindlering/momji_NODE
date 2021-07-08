module.exports = app => {
  const teams = require("../controllers/team.controller.js");

  var router = require("express").Router();

  // Create a new team
  router.post("/", teams.create);

  // Retrieve all teams
  router.get("/", teams.findAll);

  // Retrieve a single team with id
  router.get("/:id", teams.findOne);

  // Update an employee with id
  router.put("/:id", teams.update);

  // put a new employee
  router.put("/:idTeam/employee/:idEmployee", teams.addEmployee);

  // Delete an employee with id
  router.delete("/:idTeam/employee/:idEmployee", teams.removeEmployee);

  // Delete all Employees
  // router.delete("/", teams.deleteAll);

  app.use('/api/teams', router);
};