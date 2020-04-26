// Reference webistes: https://bezkoder.com/node-express-mongodb-crud-rest-api/
// https://bezkoder.com/angular-mongodb-node-express/

const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.bookshop = require("./bookshop.model")(mongoose);

module.exports = db;