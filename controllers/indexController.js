import { messages } from "../static/messages.js";

function renderIndex(req, res) {
  res.render("index", { messages });
}

export default renderIndex;
