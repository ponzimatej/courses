people = [
  { name: "John", friends: ["Tim", "Mike", "Matej", "Sally"] },
  { name: "Mike", friends: ["Matej", "John"] },
  { name: "Sally", friends: ["Tim", "Matej", "John"] },
  { name: "Tim", friends: ["John", "Sally", "Matej"] },
  { name: "Matej", friends: ["Tim", "John", "Mike", "Sally"] },
];

loyalFriends(people);

function loyalFriends(people) {
  for (person of people) {
    // kazdy clovek (4x)
    let loyalFriends = 0;
    for (friend of person.friends) {
      // kazdy jeho friend
      if (check(person.name, friend, people)) loyalFriends++; //do nove funkce davam: jmeno cloveka "Tim" a friends: kamarady jako string: "John"
    }
    person.numOfLoyalFriends = loyalFriends;
  }

  const sortedPeople = people.sort(
    (a, b) => b.numOfLoyalFriends - a.numOfLoyalFriends
  );
  let max = 0;
  const mostLoFriends = sortedPeople.filter((x) => {
    if (x.numOfLoyalFriends >= max) {
      max = x.numOfLoyalFriends;
      return x;
    }
  });

  for (person of mostLoFriends) {
    console.log(person.name);
  }
}

function check(friend, person, people) {
  // person = person.name = "Tim"
  // friend = "John"
  for (newPerson of people) {
    if (newPerson.name === friend) {
      for (newFriend of newPerson.friends) {
        if (newFriend === person) return true;
      }
    }
  }
}
