import { Router } from "express";
import { messages, addToMessages } from "../static/messages.js";

const messageRouter = Router();

messageRouter.get("/new", (req, res) => {
  res.render("new");
});

messageRouter.post("/new", (req, res) => {
  addToMessages(req.body.message, req.body.user);
  res.redirect("/");
});

messageRouter.get("/:id", (req, res) => {
  let id = req.params.id;
  let message = messages.find((message) => message.id == id);
  res.render("messageView", { message });
});

export default messageRouter;
