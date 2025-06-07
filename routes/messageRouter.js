import { Router } from "express";
import {
  renderForm,
  postForm,
  displayMessage,
} from "../controllers/messageController.js";

const messageRouter = Router();

messageRouter.get("/new", renderForm);

messageRouter.post("/new", postForm);

messageRouter.get("/:id", displayMessage);

export default messageRouter;
