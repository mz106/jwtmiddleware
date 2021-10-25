
require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
const userRouter = require("./routes/user");

app.use("/users", userRouter);

app.listen(process.env.HTTP_PORT, () => {
    console.log(("App Online"))
});