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

    findByEmail(email) {
        return new Promise.resolve(contacts.find((contact) => contact.email === email))
    }

    delete(id){
        contacts = contacts.filter((contact) => contact.id !== id);
        Promise.resolve();
    }

    create(name, email, phone, category_id ){
        const newContact = {
            id: v4(),
            name,
            email,
            phone,
            category_id
        };
        contacts.push(newContact)
        return new Promise.resolve(newContact);
    }

    update(id, {name, email, phone, category_id }){
        return new Promise((resolve) => {
            const updatedContact = {
                id,
                name,
                email,
                phone,
                category_id
            };
            contacts = contacts.map((contact) => (
                contact.id === id ? updatedContact : contact
            ));

            resolve(updatedContact)
        });
    }
}

module.exports = new ContactsRepository();
