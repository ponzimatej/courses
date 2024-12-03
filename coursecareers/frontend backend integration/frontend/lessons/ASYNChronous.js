const getFriends = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ friends: ["Tim", "Joe", "Sarah"] }), 3000);
});

const getProfile = new Promise((resolve, reject) => {
  setTimeout(
    () =>
      resolve({
        profile: {
          name: "Tim",
          country: "Canada",
          username: "timeh",
        },
      }),
    1000
  );
});

const addFriend = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ status: "success" });
  }, 2000);
});

async function getResult() {
  console.log("start");
  await addFriend.then((data) => console.log(data));
  await getProfile.then((data) => console.log(data));
  await getFriends.then((data) => console.log(data));
  console.log("done\n");
}

async function getResult1() {
  console.log("start");
  const results = Promise.all([addFriend, getProfile, getFriends]);
  console.log(await results);
  console.log("done");
}

async function getAllResults() {
  await getResult();
  await getResult1();
}

getAllResults();
