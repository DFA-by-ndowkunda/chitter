const express = require("express");
const router = express.Router({ mergeParams: true });
const bcrypt = require("bcryptjs");

const { User } = require("../models");

router.get("/new", async function (req, res) {
	res.render("sessions/new", { errors: [] });
});

router.post("/", async function (req, res) {
	let user = await User.findOne({ where: { username: req.body.username } });
	if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
		req.session.userId = user.id;
		console.log(req.session.userId);
		res.redirect("/chitter");
	} else {
		res.render("sessions/new", {
			errors: ["Sorry details do not exist"],
		});
	}
});

router.delete("/", function (req, res) {
	delete req.session.userId;
	res.redirect("/");
});

module.exports = router;
