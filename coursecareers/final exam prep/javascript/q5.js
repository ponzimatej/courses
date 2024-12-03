function hierarchy(employees) {
  let result = {};

  for (const employee of employees) {
    checkManager(employee, employee.id);
  }

  function checkManager(employee, currentID) {
    for (possibleManager of employees) {
      if (employee.id === possibleManager.manager) {
        if (!result[currentID]) result[currentID] = [];
        result[currentID].push(possibleManager.id);
        checkManager(possibleManager, currentID);
      }
    }
  }

  return result;
}

let employees = [
  { id: "1", manager: "3" },
  { id: "2", manager: "3" },
  { id: "3" },
];

console.log(hierarchy(employees));
