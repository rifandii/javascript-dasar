const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds= 100;
        setTimeout(() => {
            if (seeds >= 10){
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}


async function makeCoffee() {
    const coffee = await getCoffee();
    console.log(coffee);
}
 
makeCoffee();
 
/* output
Kopi didapatkan!
*/

// HASIL AKAN ERROR JIKA REJECT PADA PROMISE, DISARANKAN UNTUK MENGGUNAKAN TRY...CATCH