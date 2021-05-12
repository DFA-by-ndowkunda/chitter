"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Peep extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.User = this.belongsTo(models.User);
		}
	}
	Peep.init(
		{
			message: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Peep",
		}
	);
	return Peep;
};
