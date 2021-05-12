const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
const session = require("express-session");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use(
	session({
		secret: "keyboard cat",
		resave: true,
		saveUninitialized: false,
		cookie: { secure: false },
	})
);

app.set("view engine", "ejs");

const indexController = require("./controllers/index.js");
const registrationsController = require("./controllers/registrations.js");
const sessionsController = require("./controllers/sessions.js");
const chitterController = require("./controllers/chitter.js");


const { User } = require("./models");

app.use(async (req, res, next) => {
	res.locals.currentUser = req.session.userId
		? await User.findOne({
				where: {
					id: req.session.userId,
				},
		  })
		: undefined;
	res.locals.errors = [];
	next();
});
const authenticator = (req, res, next) => {
	if (!req.session.userId) {
		res.redirect("/chitter/index");
	} else {
		next();
	}
};

app.use("/", indexController);
app.use("/registrations", registrationsController);
app.use("/sessions", sessionsController);
app.use("/chitter", chitterController);


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
