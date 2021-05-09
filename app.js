const express = require("express");
const app = express();
const port = 3000;

const indexController = require("./controllers/index.js");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/", indexController);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
