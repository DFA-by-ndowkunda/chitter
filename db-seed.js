const db = require("./models");
const bcrypt = require("bcryptjs");
const hash = bcrypt.hashSync("password", 10);

const seedUser = async () => {
	console.log("seeding user table");
	await db.User.create({
		name: "Marie",
		username: "ndowkunda",
		email: "marie@test.com",
		passwordHash: hash,
		createdAt: new Date("2021", "5", "10", "12", "15"),
		updatedAt: new Date("2021", "5", "10", "12", "15"),
	});
};
const seedPeep = async () => {
	console.log("seeding peep table");
	await db.Peep.create(
		{
			message: "Hello World!",
			createdAt: new Date("2021", "5", "10", "12", "15"),
			updatedAt: new Date("2021", "5", "10", "12", "15"),
			user: {
				name: "Marie",
				username: "ndowkunda",
				email: "marie@test.com",
				passwordHash: hash,
				createdAt: new Date("2021", "5", "10", "12", "15"),
				updatedAt: new Date("2021", "5", "10", "12", "15"),
			},
		},
		{
			include: [
				{
					association: db.Peep.User,
				},
			],
		}
	);
};

module.exports = { seedPeep, seedUser };
