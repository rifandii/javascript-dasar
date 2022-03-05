function minimal(a,b){
    if(a<b){
        return a;
    } else if(a>b) {
        return b;
    } else if (a == b) {
        return a;
    }
};

const hasil = minimal(51,52);

console.log(hasil);


function power(a,b){
    return a ** b;
}

const hasil_power = power(7,3);

console.log(hasil_power);