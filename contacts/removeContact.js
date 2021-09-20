const listContacts = require("./listContacts");
const updateProducts = require("./updateContacts");

const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((item) => item.id !== id);
  await updateProducts(newContacts);
  return true;
};

module.exports = removeContact;
