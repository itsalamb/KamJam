const express = require("express");
const usersRouter = express.Router();
const { getAllUsers, getUserByEmail, createUser } = require("../db/users");
const jwt = require("jsonwebtoken");
const { requireUser } = require("./utils");

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next();
});

// Get all users
usersRouter.get("/", async (req, res) => {
  const users = await getAllUsers();

  res.send({
    users,
  });
});

// Login
usersRouter.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next({
      name: "MissingCredentialError",
      message: "Please complete all of the required fields",
    });
  }

  try {
    const user = await getUserByEmail(email);

    if (user && user.password === password) {
      const token = jwt.sign(
        {
          id: user.id,
          user: email,
        },
        process.env.JWT_SECRET
      );
      res.send({ message: "You're logged in!", token: token });
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Email or password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Register
usersRouter.post("/register", async (req, res, next) => {
  const { email, password, name } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (user) {
      next({
        name: "UserExistsError",
        message: "That email address is already registered",
      });
    }

    const newUser = await createUser({
      email,
      password,
      name,
    });

    const token = jwt.sign(
      {
        id: newUser.id,
        email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1w",
      }
    );

    res.send({
      name: newUser.name,
      message: "Thank you for registering with KamJam!",
      token,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// Authenticate
usersRouter.get("/authenticate", requireUser, (req, res, next) => {
  res.send({
    success: true,
    user: req.user,
  });
});

module.exports = usersRouter;
