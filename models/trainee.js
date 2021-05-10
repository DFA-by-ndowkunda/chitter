"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class trainee extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			trainee.hasMany(models.peep);
		}
	}
	trainee.init(
		{
			name: DataTypes.STRING,
			userHandle: DataTypes.STRING,
			email: DataTypes.STRING,
			passwordHash: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "trainee",
		}
	);
	return trainee;
};
