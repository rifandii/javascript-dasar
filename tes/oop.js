/**
 * TODO:
 * 1. Buatlah class bernama Person dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - gender: string
 *      - isWorking: boolean
 *      - isStudying: boolean
 * 
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - gender
 *      - isWorking
 *      - isStudying
 * 
 *    - Memiliki method:
 *      - introduceSelf yang mengembalikan nilai string jika
 *          - Pengguna memasukan gender "Male" & "Female" maka mengembalikan nilai "My name is ${this.name}, My gender ${this.gender} and I'm ${this.age} years old"
 *          - Pengguna tidak memasukan gender atau selain dari "Male" & "Female" maka mengembalikan nilai "My name is ${this.name} and I'm ${this.age} years old"
 * 
 * 
 * 
 * 2. Buatlah class bernama Student dengan ketentuan:
 *    - Merupakan turunan dari class Person
 *    - Memiliki properti private
 *      - semester
 *    - Memiliki Constructor:
 *      - semester
 *      
 *    - Memiliki method:
 *      - introduceSelf yang mengembalikan nilai string "My name is ${this.name} and I'm in ${this.semester}"
 *      - canPrakerin yang mengembalikan nilai jika
 *          - semester 5 keatas sampai dengan semester 12 maka "Student ${this.name} can take Praktek Kerja Lapangan class"
 *          - semester 1 sampai 4 maka "Student ${this.name} can't take Praktek Kerja Lapangan class, yet"
 *          - selain itu maka "Student ${this.name}, You should have graduated from college dude!"
 * 
 *     - Ketika diinstansiasi, properti isWorking harus bernilai false & isLearning bernilai true
 *
 * 
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string "${this.name} sedang terbang!"
 *   
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


class Person {
    name;
    age;
    gender;
    isWorking;
    isStudying;

    constructor(name, age = 0, gender = "unknown", isWorking, isStudying){
        this.name = name;
        this.age = age;
        this.gender = gender.toLowerCase();
        this.isWorking = isWorking;
        this.isStudying = isStudying;
    }

    introduceSelf() {

        if(this.gender == "male" || this.gender == "female"){
            return `My name is ${this.name}, My gender ${this.gender} and I'm ${this.age} years old`
        } else {
            return `My name is ${this.name} and I'm ${this.age} years old`
        }
    } 



}


class Student extends Person {
    
    #semester; //Private properties

    constructor(name, semester = 0, age, gender){
        super(name, age, gender);
        this.isWorking = false;
        this.#semester = semester;
        this.isStudying = true;

    }

    introduceSelf() {
        return `My name is ${this.name} and I'm in semester ${this.#semester}`
    }
    canPrakerin() {
        if(this.#semester >= 5 && this.#semester <= 12) {
            return `Student ${this.name} can take Praktek Kerja Lapangan class`
        } else if (this.#semester < 5 && this.#semester > 0) {
            return `Student ${this.name} can't take Praktek Kerja Lapangan class, yet!`
        } else {
            return `${this.name}, You should have graduated from college dude!`
        }
    }
}

class Teacher extends Person {
    #teaches;

    constructor(name, teaches){
        super(name, teaches);
        this.isWorking = true;
        this.isStudying = false;
        this.#teaches = teaches;

    }

    introduceSelf(){
        return `Hello class, my name is ${this.name} and I'm going to teach ${this.#teaches}`
    }

}

// PERSON
const Andi = new Person("Andi", 21, "FeMALE");
console.log(Andi.introduceSelf())


// STUDENT
const myStudent = new Student("Fandi", 5);
console.log(myStudent.introduceSelf());
console.log(myStudent.canPrakerin());

// console.log(myStudent.#semester);


//Teacher
const myTeacher = new Teacher("Imam", "Dasar-dasar pemrograman");
console.log(myTeacher.introduceSelf());