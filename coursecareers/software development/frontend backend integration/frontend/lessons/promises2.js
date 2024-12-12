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

const results = Promise.all([getFriends, getProfile, addFriend]);
results.then((data) => {
  console.log(data);
});
