import express from "express";
import passport from "passport";
const router = express.Router();

// @route   GET /
// @desc    Authenticate via Discord
router.get("/", passport.authenticate("discord"));

// @route   GET /
// @desc    Redirection Validation
router.get("/redirect", passport.authenticate("discord", {
    failureRedirect: "/forbidden",
    successRedirect: "/account",
}));

export default router;