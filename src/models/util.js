const config = require("../config/index");
const { Sequelize } = require("sequelize");
const databaseURL = config.pg.database_url;

function getSequelize(){
    var sequelize = new Sequelize(databaseURL, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
              }
        }
    });

    return sequelize;
}

module.exports = {
    getSequelize
  };