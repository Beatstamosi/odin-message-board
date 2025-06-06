import { Router } from "express";

const messageRouter = Router();

messageRouter.get("/new", (req, res) => {
  res.render("new");
});

export default messageRouter;
