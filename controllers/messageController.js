import { getMessages, addMessage } from "../db/queries.js";

function renderForm(req, res) {
  res.render("new");
}

async function postForm(req, res) {
  await addMessage(req.body.message, req.body.user);
  res.redirect("/");
}

async function displayMessage(req, res) {
  let id = req.params.id;
  let messages = await getMessages();
  let message = messages.find((message) => message.id == id);
  res.render("messageView", { message });
}

export { renderForm, postForm, displayMessage };
