import { Router } from "express";

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const title = "Mini Message Board";

indexRouter.get("/", (req, res) => {
  res.render("index", { title, messages });
});

export default indexRouter;
