const express = require("express");
const router = express.Router();

const { Peep } = require("../models");
const User = require("../models").User;

router.get("/", async function (req, res) {
	const peeps = await Peep.findAll({ include: { all: true } });
	const user = await User.findAll();
	res.render("chitter/index", { peeps: peeps, user: user });
});

router.post("/", async function (req, res) {
	await Peep.create({ message: req.body.message, UserId: req.session.userId });
	res.redirect("/chitter");
});

module.exports = router;
