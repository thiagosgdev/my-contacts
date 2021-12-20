const { v4 } = require("uuid");

let contacts = [
    {
        id: v4(),
        name: "Lucy",
        email: "lucy_666@mail.com",
        phone: "66666666",
        category_id: v4(),
    },
]

class ContactsRepository {
    findAll(){
        return new Promise.resolve(contacts);
    }

    findById(id) {
        return new Promise.resolve(contacts.find((contact) => contact.id === id))
    }

    delete(id){
        contacts = contacts.filter((contact) => contact.id !== id);
        Promise.resolve();
    }
}

module.exports = new ContactsRepository();
