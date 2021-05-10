"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class peep extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			peep.belongsTo(models.trainee);
		}
	}
	peep.init(
		{
			message: DataTypes.STRING,
			traineeId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "peep",
		}
	);
	return peep;
};
