const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const register = async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    //1- check if the user already exits
    if (user) {
      return res.status(400).json([{ msg: "This user is already exists" }]);
    }
    //2- create new  user
    user = new User({ name, lastName, email, password });

    //3- hash the passord
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // 4- save the user
    await user.save();

    //5 - login the user (token)
    const payload = {
      userID: user._id,
    };
    const token =jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
    //for passport :
    // const token = "Bearer " + jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    //6- RESPONSE
    res.send({
      token,
      user: {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        _id: user._id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    //1- check if the user exists
    if (!user) {
      return res.status(400).send([{ msg: "Bad credentials (email) " }]);
    }

    //2- compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send([{ msg: "Bad credentials (password) " }]);
    }

    //3-sign in the user ( token )
    const payload = {
      userID: user._id,
    };
    const token =jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
    //for passport :
    // const token = "Bearer " + jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    res.send({
      token,
      user: {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        _id: user._id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAuthUser = (req, res) => {
  res.send({ user: req.user });
};

module.exports = {
  register,
  login,
  getAuthUser,
};
