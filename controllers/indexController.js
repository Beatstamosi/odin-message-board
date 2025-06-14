import { getMessages } from "../db/queries.js";

async function renderIndex(req, res) {
  let messages = await getMessages();
  res.render("index", { messages });
}

export default renderIndex;
