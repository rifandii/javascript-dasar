// arr.sort([compareFunction])
 
// [...] adalah opsional parameter

// array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.


// Sorting alphabetically works well for strings ("Apple" comes before "Banana").

// But, sorting numbers can produce incorrect results.

// "25" is bigger than "100", because "2" is bigger than "1".

// Compare function untuk mengurutkan sesuai angka

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]


// ASCENDING
array1.sort(function(a, b){return a-b});
console.log(array1);

// output: [ 1, 4, 30, 101, 121, 1000 ] 


// DESCENDING
array1.sort(function(a, b){return b-a});
console.log(array1);
// output: [ 1000, 121, 101, 30, 4, 1 ]

// Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

// Jika, negative maka `a` akan diletakkan sebelum `b`
// Jika, positive maka `b` akan diletakkan sebelum `a`
// Jika, 0 maka tidak ada perubahan posisi.