const express = require("express");
const router = express.Router();

const { Peep } = require("../models");
const User = require("../models").User;

router.get("/", async function (req, res) {
	const peeps = await Peep.findAll({ include: { all: true } });
	const users = await User.findAll();
	peeps.reverse();
	res.render("chitter/index", { peeps: peeps, users: users });
});

router.post("/", async function (req, res) {
	await Peep.create({ message: req.body.message, UserId: req.session.userId });
	res.redirect("/chitter");
});

module.exports = router;
