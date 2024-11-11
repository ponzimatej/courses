function updateEmployeeSalary(employees, employeeId, newSalary) {
  let person;
  for (employee of employees) {
    if (employee.id === employeeId) {
      person = this.employee;
    }
  }

  if (person === undefined) {
    console.log(null);
    return;
  }

  person.salary = newSalary;
  console.log(person);
}
