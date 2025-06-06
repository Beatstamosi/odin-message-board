const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const addToMessages = (text, user) => {
  messages.push({
    id: messages[messages.length - 1].id + 1,
    text,
    user,
    added: new Date(),
  });
};

export { messages, addToMessages };
