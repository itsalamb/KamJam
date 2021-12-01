const express = require("express");
const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
  if (req.user) {
    console.log("User is set:", req.user);
  }

  next();
});

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

apiRouter.use((error, req, res, next) => {
  res.status(500).send(error);
});

module.exports = apiRouter;

// import axios from 'axios';

// // Sample function to call our backend API
// export async function getMessage() {
//   try {
//     const { data } = await axios.get('/api');
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
