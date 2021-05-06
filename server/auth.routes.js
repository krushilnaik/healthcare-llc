const router = require("express").Router();

router.get("/", (_req, res) => {
	console.log("received GET /auth");
	res.send("Auth API is up and running");
});

module.exports = router;
