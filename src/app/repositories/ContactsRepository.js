const { uuid } = require("uuidv4");

const contacts = [
    {
        id: uuid(),
        name: "Lucy",
        email: "lucy_666@mail.com",
        phone: "66666666",
        category_id: uuid(),
    },
]

class ContactsRepository {
    findAll(){
        return new Promise.resolve(contacts);
    }
}

module.exports = new ContactsRepository();
