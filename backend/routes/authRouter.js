const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getAuthUser,
} = require("../controllers/authController");
const {
  registerRules,
  validator,
  loginRules,
} = require("../middlewares/bodyValidator");
const isAuth = require("../middlewares/isAuth")
//for passeport
//const isAuth = require("../middlewares/passportSetup");

/**
 * @param POST /api/auth/register
 * @description register user
 * @access PUBLIC
 */

router.post("/register", registerRules(), validator, register);

/**
 * @param POST /api/auth/login
 * @description login user
 * @access PUBLIC
 */

router.post("/login", loginRules(), validator, login);

/**
 * @param get /api/auth/me
 * @description get auth user
 * @access PRIVATE
 */


router.get("/me", isAuth, getAuthUser);
//for passeport
// router.get("/me", isAuth(), getAuthUser);

module.exports = router;
