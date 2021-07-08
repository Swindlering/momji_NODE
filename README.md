#  Simple test Momji - Node.js Rest Apis with Express, Sequelize & Mariadb.

## Project setup
```
npm install
```

### Run
```
node server.js
```
## MYSQL INSTALL
```
sudo apt install mariadb-server
```

## MYSQL USER
```
CREATE USER 'momji'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON momji.* TO 'momji'@'localhost';

FLUSH PRIVILEGES;

```
## Routes EMPLOYEE 
  * Create a new Employee in POST (".../api/employees");

  * Retrieve all Employees in GET (".../api/employees");

  * Retrieve a single Employees with id in GET  (".../api/employees/:id");

  * Update an Employees with id in PUT  (".../api/employees/:id");

  * Delete an Employees with id in DELETE  (".../api/employees/:id");

  * Delete all Employees in DELETE  (".../api/employees/");

## Routes TEAM

  * Create a new team in POST (".../api/teams");

  * Retrieve all teams in GET (".../api/teams");

  * Retrieve a single team with id in GET (".../api/teams/:id");

  * Update an Employees with id in PUT (".../api/teams/:id");

  * Add new Employees working in this team in PUT (".../api/teams/:idTeam/employees/:idEmployees");

  * Delete an Employees with id in DELETE (".../api/teams/:idTeam/employees/:idEmployees");

  * Delete all Employees DELETE (W.I.P.)