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
