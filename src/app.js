import express, { urlencoded } from "express";
import morgan from "morgan";
import { config } from "dotenv";
import animalsRouter from "./routes/animal.routes.js";
config();
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use("/api/animals", animalsRouter);

export default app;
