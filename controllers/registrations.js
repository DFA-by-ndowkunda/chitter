const express = require("express");
const router = express.Router({ mergeParam: true });
const bcrypt = require("bcryptjs");

const { User } = require("../models");

router.get("/new", function (req, res) {
	res.render("registrations/new", { errors: [] });
});

router.post("/", async function (req, res) {
	const hash = bcrypt.hashSync(req.body.password, 10);
	User.create({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		passwordHash: hash,
	})
		.then((user) => {
			req.session.userId = user.id;
			res.redirect("/chitter");
		})
		.catch((errors) => {
			res.render("registrations/new", {
				errors: errors,
			});
		});
});

module.exports = router;
