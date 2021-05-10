"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"trainees",
			[
				{
					name: "Marie",
					userHandle: "ndowkunda01",
					email: "marie01@gmail.com",
					passwordHash: "password123",
					createdAt: new Date("2021", "5", "10", "12", "15"),
					updatedAt: new Date("2021", "5", "10", "12", "15"),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
