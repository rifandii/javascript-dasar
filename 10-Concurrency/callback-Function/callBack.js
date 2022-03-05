const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}
 
 
orderCoffee(coffee => {
    console.log(coffee);
});
 
 
/* output
Sedang membuat kopi, silakan tunggu...
---- setelah 3 detik ----
Kopi sudah jadi!
*/

/**
 * bayangkan kembali ketika memesan kopi. Pada kasus ini mungkin terdapat dua aksi yang bisa kita lakukan:
 * (Synchronous) Kita tetap menunggu di kasir sampai kopi datang.
 * (Asynchronous) Kita menunggu di meja setelah memesan kopi. Selanjutnya kopi akan diantarkan oleh pelayan. Sehingga,kita tidak perlu menunggu di kasir dan dapat melakukan pekerjaan lain.
 * Nah, pada JavaScript, pelayan ini berperan layaknya callback function. Ia diperintahkan pada sebuah fungsi asynchronous kemudian akan dipanggil/digunakan ketika tugas itu selesai.
 * 
 * 
 * Pertama, kita tambahkan parameter dengan nama callback pada fungsi asynchronous.
 * Kemudian kita panggil atau gunakan callback yang diisikan dengan data yang akan dibawa (coffee) ketika task selesai dilakukan.
 * Setelah menggunakan callback, fungsi tidak perlu lagi mengembalikan nilai. Sehingga, kita bisa menghapus kode return coffee;
 */