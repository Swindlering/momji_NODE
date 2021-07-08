const moment = require('moment');
module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("team", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at',
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

  return Team;
};