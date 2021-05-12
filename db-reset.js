const db = require("./models");

const truncateTables = () => {
	console.log("truncating tables");
	db.Peep.destroy({ truncate: true, cascade: true });
	db.User.destroy({ truncate: true, cascade: true });
};
module.exports = truncateTables;
