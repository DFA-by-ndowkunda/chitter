"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"peeps",
			[
				{
					message: "Hello World!",
					traineeId: 1,
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
