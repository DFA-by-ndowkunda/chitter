require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		database: "chitter-app_development",
		host: "127.0.0.1",
		dialect: "postgres",
	},
	test: {
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		database: "chitter-app_test",
		host: "127.0.0.1",
		dialect: "postgres",
	},
};
