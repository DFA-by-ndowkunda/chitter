const express = require("express");
const router = express.Router();
const { peep, trainee } = require("../models");

router.get("/", async function (req, res) {
	const peeps = await peep.findAll({
		include: { all: true },
	});
	const trainees = await trainee.findAll();
	res.render("index", {
		peeps: peeps,
		trainees: trainees,
	});
});

module.exports = router;
