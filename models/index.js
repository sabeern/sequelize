const database = require("../config/database");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(database.DB, database.USER, database.PASS, {
  host: database.HOST,
  dialect: database.dialect,
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(() => console.log("connected to db"))
  .catch((err) => console.log("Err" + err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./testModel")(sequelize, DataTypes);
db.sequelize.sync({ force: false }).then(() => console.log("yes syc is done"));
module.exports = db;
