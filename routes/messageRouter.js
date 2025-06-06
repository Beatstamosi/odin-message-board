import { Router } from "express";
import { addToMessages } from "../static/messages.js";

const messageRouter = Router();

messageRouter.get("/new", (req, res) => {
  res.render("new");
});

messageRouter.post("/new", (req, res) => {
  addToMessages(req.body.message, req.body.user);
  res.redirect("/");
});

export default messageRouter;
