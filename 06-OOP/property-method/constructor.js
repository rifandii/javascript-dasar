// cara 1
class Mail {
    constructor(author) {
        this.from = 'pengirim@dicoding.com';
        console.log('is instantiated', author);
    };
}


const mail1 = new Mail("emailku@dicoding.com");

const mail2 = new Mail(085000111222); // misalkan untuk SMS
const mail3 = new Mail("emailku@dicoding.com"); // misalkan untuk Email