function greeting(name, language) {
    if(language === "English") {
        return `Good Morning ${name}!`;
    } else if (language === "Japanese") {
        return `Ohayogozaimasu ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

let greetingMessage = greeting("Fandi", "English");
console.log(greetingMessage);