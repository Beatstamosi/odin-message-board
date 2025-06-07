import { messages, addToMessages } from "../static/messages.js";

function renderForm(req, res) {
  res.render("new");
}

function postForm(req, res) {
  addToMessages(req.body.message, req.body.user);
  res.redirect("/");
}

function displayMessage(req, res) {
  let id = req.params.id;
  let message = messages.find((message) => message.id == id);
  res.render("messageView", { message });
}

export { renderForm, postForm, displayMessage };
