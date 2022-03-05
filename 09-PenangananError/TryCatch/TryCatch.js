try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log("Terjadi error!");  // (4)
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
 


// Baris kode (2) akan menghasilkan eror. Eksekusi kode di dalam blok try akan dihentikan, sehingga baris kode (3) tidak akan tereksekusi. Kemudian kode akan dilanjutkan ke baris (4) atau blok catch.


/**
 * Object error memiliki beberapa properti utama di dalamnya, yaitu:
 * 
 * name : Nama error yang terjadi.
 * message : Pesan tentang detail error.
 * stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.
 * 
 * 


 */

/* output
Awal blok try
ReferenceError
errorCode is not defined
ReferenceError: errorCode is not defined
    at file:///home/dicoding/Playground/javascript/CoffeeMachine/error.js:3:5
    at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
    at async Loader.import (internal/modules/esm/loader.js:166:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
*/