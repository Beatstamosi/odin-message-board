import path from "node:path";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import indexRouter from "./routes/indexRouter.js";
import messageRouter from "./routes/messageRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/message", messageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
