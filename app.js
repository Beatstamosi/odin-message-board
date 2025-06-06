import path from "node:path";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import indexRouter from "./routes/indexRouter.js";
import messageRouter from "./routes/messageRouter.js";

// give access to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// access to css files
app.use("/static", express.static(path.join(__dirname, "static")));

// parse form data into req.body
app.use(express.urlencoded({ extended: true }));

// set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routing
app.use("/", indexRouter);
app.use("/messages", messageRouter);

// Port and server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
