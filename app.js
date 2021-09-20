const contactsOperations = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      break;

    case "get":
      const oneContact = await contactsOperations.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contactsOperations.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contactsOperations.removeContact(id);
      console.log("Contact was deleted");
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// (async () => {
//   try {
//     // const contacts = await contactsOperations.listContacts();
//     // console.log(contacts);
//     // const oneContact = await contactsOperations.getContactById(id);
//     // console.log(oneContact);
//     // const newContact = await contactsOperations.addContact(newData);
//     // console.log(newContact);
//     //   const updateContact = await contactsOperations.updateById(id, {...})
//     // const result = await contactsOperations.removeContact(delId);
//     // console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();
