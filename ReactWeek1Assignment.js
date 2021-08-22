class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;

    }

}
class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;

        registerStudent(student) {
            console.log(this.students.map(s => s.email).includes(student.email));
        }
    }


}
let sBenny = new Student("Benny", "b@gmail.com", "tucson");
let sEsteban = new Student("esteban", "e@gmail.com", "tucson");
let sEsteban = new Student("esteban", "e@gmail.com", "tucson");


