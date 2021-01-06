import { config } from "dotenv";
config();
import express, { Application } from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";

// Init Express
const app:Application = express();

// Logging
if (process.env.NODE_ENV === "development") {
    app.use(logger("dev"));
}

// Body Parser
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// Define Port
const port:string|number = process.env.PORT || 3000;

// Listen
app.listen(port, () => console.log(`Server started in ${process.env.NODE_ENV} mode on port ${port}`));