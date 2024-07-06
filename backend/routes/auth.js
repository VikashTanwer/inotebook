const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "vikashtanwer$123";

//route -1 create a user using: post "/api/auth/createuser". does not requared loged in
router.post(
  "/createuser",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "password lenght must be 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are errors return bad request
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    //check wheather the user with email already exist
    try {
      let user = await User.findOneAndDelete({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry a user with this email is already exists" });
      }
      //create a new user
      const salt = await bcrypt.genSaltSync(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken);

      // res.json({ user });
      res.json({ authToken });
      //catch errors
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }

    //    .then(user => res.json(user))
    //    .catch(err=> {console.log(err)
    //    res.json({error: "plese enter a valid unique value for validation", message: err.message
    // })})

    //    console.log(req.body);
    // const user = User(req.body);
    // user.save();
    // res.send(req.body);
  }
);

//route - 2 aurhunticate a user using: post "/api/auth/login". does not requared loged in
router.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "password can not be blank").exists(),
  ],
  async (req, res) => {
    // if there are errors return bad request
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "try with correct information" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "try with correct information" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);

//route -3 get loged in user detail using: post "/api/auth/getuser".loged in required
router.post(
  "/getuser",fetchuser,
  async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);

module.exports = router;
