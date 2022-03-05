const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * 
 */

//  Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.

// Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses pada index array sesuai dengan iterasinya.

