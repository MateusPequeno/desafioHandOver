import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import panelsRoutes from "../src/routes/panels";
import userRoutes from "../src/routes/user";
import authRoutes from "../src/routes/auth";
import "./database";
import "reflect-metadata";

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
const PORT = 5555;
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/panels", panelsRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.get("/", (request: Request, response: Response) => {
  response.send("HomePage");
});

app.listen(PORT, () =>
  console.log(`🚗 The Server's running on port: http://localhost:${PORT}`)
);
