"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
      this.Peep = this.hasMany(models.Peep, { onDelete: 'cascade' })
    }
    
      date() {
      const date = new Date(this.createdAt)
      return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    }

	}
	User.init(
		{
			name: DataTypes.STRING,
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					len: {
						args: [6],
						msg: "Username must have a minimum of 6 characters",
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				validate: {
					isEmail: { msg: "Please enter a valid email address" },
					notEmpty: true,
				},
			},
			passwordHash: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: true,
					notEmpty: { msg: "Password is required" },
				},
			},
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
