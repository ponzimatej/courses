class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return this.name + ", " + this.age;
  }
}

class Teacher extends Person {
  salary;

  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  greet() {
    return "I am the teacher " + super.greet();
  }
}

class Student extends Person {
  group;

  constructor(name, age, group) {
    super(name, age);
    this.group = group;
  }
}

const s1 = new Student("Matej", 20, "A");
const t1 = new Teacher("Peter", 50, 50000);
console.log(s1.greet());
console.log(t1.greet());
