const router = require("express").Router();

router.get("/", (_req, res) => {
	res.send("Auth API is up and running");
});

module.exports = router;
