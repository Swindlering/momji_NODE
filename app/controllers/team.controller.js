const db = require("../models");
const Team = db.teams;
const Employee = db.employees;

// Create and Save a new Team
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty! Please add the name of the team"
    });
    return;
  }

  // Create a team
  const team = {
    name: req.body.name,
    description: req.body.description,
  };

  // Save Team in the database
  Team.create(team)
    .then(data => {
      res.send(data);
      console.log(">> Created Team: " + JSON.stringify(team, null, 2));
    })
    .catch(err => {
      console.log(">> Error while creating the Team: ", err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Team."
      });
    });
};

// Retrieve all with teams from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Team.findAll({
    where: condition,
    include: [],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(">> Error while retrieving Teams: ", err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Teams."
      });
    });
};

// Find a single Team with an id

exports.findOne = (req, res) => {
  const id = req.params.id;

  Team.findByPk(id, {
    include: [
      {
        model: Employee,
        as: "employees",
        attributes: ["id", "firstName","lastName", "email", "adresse"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then(data => {
      if (!data) {
        res.status(404).send({ error: 'Not found!' });
      }
      res.send(data);
    })
    .catch(err => {
      console.log(">> Error while finding Team: ", err);
      res.status(500).send({
        message: "Error retrieving Teams with id=" + id
      });
    });
};

// Update a Team by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Team.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Team was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Team with id=${id}. Maybe Team was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      console.log(">> Error while adding Team: ", err);
      res.status(500).send({
        message: "Error updating Team with id=" + id
      });
    });
};

// Add a Employee by the id in the request
exports.addEmployee = (req, res) => {
  const idTeam = req.params.idTeam;
  const idEmployee = req.params.idEmployee;

  Team.findByPk(idTeam)
    .then((team) => {
      if (!team) {
        throw new Error('Team not found!');
      }
      return Employee.findByPk(idEmployee).then((employee) => {
        if (!employee) {
          throw new Error("Employee not found!");
        }

        team.addEmployee(employee);
        console.log(`>> added Employee id=${employee.id} to Team id=${team.id}`);
        res.send({
          message: `${employee.name} was add to Team ${team.name}`
        });
      });
    })
    .catch(err => {
      console.log(">> Error while adding an Employee to Team: ", err);
      res.status(500).send({
        message: "Error updating Team by addind employee with id=" + idEmployee
      });
    });
};
