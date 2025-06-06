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

const addToMessages = (text, user) => {
  messages.push({ text, user, added: new Date() });
};

export { messages, addToMessages };
