const express = require("express");
const usersRouter = express.Router();
const { getAllUsers, getUserByEmail, createUser } = require("../express/db");
const jwt = require("jsonwebtoken");
const { requireUser } = require("./utils");

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next();
});

usersRouter.get("/", async (req, res) => {
  const users = await getAllUsers();

  res.send({
    users,
  });
});

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

usersRouter.post("/register", async (req, res, next) => {
  const { username, password, name } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (user) {
      next({
        name: "UserExistsError",
        message: "That email address is already registered",
      });
    }

    const user = await createUser({
      email,
      password,
      name,
    });

    const token = jwt.sign(
      {
        id: user.id,
        email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1w",
      }
    );

    res.send({
      message: "Thank you for registering with KamJam!",
      token,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/authenticate", requireUser, (req, res, next) => {
  res.send({
    success: true,
    user: req.user,
  });
});

module.exports = usersRouter;
