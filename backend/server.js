const express = require("express");
// const passport = require("passport");
const app = express();

const connectDB = require("./config/connectDB");
const logger = require("./middlewares/logger");

const authRouter = require("./routes/authRouter");


//middleWares
app.use(express.json());
// app.use(passport.initialize());
app.use("/api/auth", logger);

//CONNECT THE DB
connectDB();

app.use("/api/auth", authRouter);

//START THE SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(`The Server is Running on port ${PORT}...`)
);
