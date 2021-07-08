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
        return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
      }
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at',
      get() {
        return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY h:mm:ss');
      }
    }
  });

  return Team;
};