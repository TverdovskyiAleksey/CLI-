const { v4 } = require("uuid");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const getAll = require("./listContacts");

const addContact = async (data) => {
  const newContact = { ...data, id: v4() };
  const contacts = await getAll();
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

module.exports = addContact;
