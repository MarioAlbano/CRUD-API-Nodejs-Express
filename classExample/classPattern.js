class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  studentInfo() {
    console.log(
      `Nome do estudante: ${this.name}. Número de matrícula: ${this.id}`
    );
  }
}

module.exports = Student;

const ClassPrint = require("./classExample/classPattern");

//No arquivo principal, usar: const MarioAlbano = new ClassPrint(1, "Mario Albano");
// MarioAlbano.studentInfo();
