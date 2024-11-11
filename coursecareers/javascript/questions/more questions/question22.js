function filterAndTransform(people) {
  people = [...people].filter((b) => b.age >= 18);
  const arr = people.map(
    (x) => `${x.name} is ${x.age} years old and loves ${x.hobby}.`
  );
  console.log(arr);
}

const people = [
  { name: "Kare", age: 22, hobby: "skiing" },
  { name: "Leo", age: 24, hobby: "equestrianism" },
];
filterAndTransform(people);
