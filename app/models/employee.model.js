const moment = require('moment');

module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address',
        },
      },
      unique: {
        args: true,
        msg: 'Email already exists',
      },
    },
    adresse: {
      type: Sequelize.STRING
    },
    registered: {
      type: Sequelize.DATE,
      allowNull: false,
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY/MM/DD h:mm:ss');
      }
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      field: 'is_active',
      defaultValue: false
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at',
      allowNull: false,
      defaultValue: Sequelize.NOW,
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY/MM/DD h:mm:ss');
      }
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at',
      get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY/MM/DD h:mm:ss');
      }
    }
  });

  return Employee;
};
