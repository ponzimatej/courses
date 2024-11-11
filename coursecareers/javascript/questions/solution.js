function friends(people) {
  if (people.length == 0) {
    return undefined;
  }

  // we'll start by creating a new object that stores the persons name as a property/key
  // this allows us to more easily lookup with person has which friends
  const newPeople = {};
  for (const person of people) {
    newPeople[person.name] = { friends: person.friends, loyalFriends: 0 };
  }

  // we'll use the newPeople object to store the number of loyal friends
  for (const person of people) {
    for (const friend of person.friends) {
      const isFriend = newPeople[friend].friends.includes(person.name);
      if (isFriend) {
        newPeople[person.name].loyalFriends += 1;
      }
    }
  }

  // now we can see who has the most loyal friends
  let maxFriendsPerson = undefined;
  for (const [name, values] of Object.entries(newPeople)) {
    if (maxFriendsPerson === undefined) {
      maxFriendsPerson = name;
      continue;
    }

    if (values.loyalFriends > newPeople[maxFriendsPerson].loyalFriends) {
      maxFriendsPerson = name;
    }
  }

  return maxFriendsPerson;
}

people = [
    { name: "John", friends: ["Tim", "Mike", "Matej", "Sally"] },
    { name: "Mike", friends: ["Matej", "John"] },
    { name: "Sally", friends: ["Tim", "Matej", "John"] },
    { name: "Tim", friends: ["John", "Sally", "Matej"] },
    { name: "Matej", friends: ["Tim", "John", "Mike", "Sally"] },
  ];
const result = friends(people);
console.log(result);
