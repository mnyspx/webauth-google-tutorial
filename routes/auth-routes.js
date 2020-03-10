const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req,res) => {
    res.render("login.ejs");
});

// login using Google
router.get("/google", passport.authenticate("google", {scope: ["profile","email"]}));

//if login succeeds, redirect here
router.get("/google/redirect", (req,res) => {
res.send("Login OK, show profile");
});

module.exports = router;