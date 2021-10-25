
const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("get hit")
    res.status(200).json({msg: "profile"});
});

router.post("/register", (req, res) => {
    console.log("register hit")
    res.status(201).json({msg: "register", body: req.body});
});

router.post("/login", (req, res) => {
    res.status(200).json({msg: "login", body: req.body});
});

module.exports = router;