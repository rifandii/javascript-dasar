class Mail{
    constructor(author) {
        this._contacts = [];
        this.from = author;
    }
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

const mail1 = new Mail('Fandi');
mail1.sendMessage('Haloo','tujuan@gmail.com')