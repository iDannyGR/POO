const natalia = {
    name: "Natalya",
    age: 20,
    courseAprobe: [
        "Curso definitivo de HTML/CSS",
        "Curso Practico de HTML/CSS"
    ],

    aprobarCurso(nuevoCurso){
            this.courseAprobe.push(nuevoCurso);
    }
};

//haceque natalia apruebe otro curso

natalia.courseAprobe.push("Curso de polimorfismo");
natalia.aprobarCurso('curso de closure and scope');

function Student(name, age, courseAprove) {
        this.name = name;
        this.age = age;
        this.courseAprobe = courseAprove;
        // this.aprovarCurso = ()=>{

        // }
}
Student.prototype.aprobarCurso =function (nuevoCurso){
    this.courseAprobe.push(nuevoCurso);
 }

const juanita = new Student(
    'Jorge Daniel Garcia',
    32,
    ["curso de pingaloca",
        "curso de pingaloca 23423",
    "curso de ingles basico para pendejos"]
)
juanita.aprobarCurso('cursso de pasta dental y chano')