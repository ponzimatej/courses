if (
  user.age >= movie.ageLimit &&
  movie.isAvailibleInCountry(user.country) &&
  !movie.isRestrictedToPremiumUsers
) {
  // Display the movie
}

// |
// |
// |
// V

let isOldEnough = user.age >= movie.ageLimit;
let isInAvailibleCountry = movie.isAvailibleInCountry(user.country);
let isNotRestrictedMovie = !movie.isRestrictedToPremiumUsers;

if (isOldEnough && isInAvailibleCountry && isNotRestrictedMovie) {
  // Display the movie
}

//
// short circuiting logic
//

let user = null;

// This will not thrown an error because the second part of
// the condition is not evaluated if the first part is false

if (user && user.isLoggedIn) {
  // execute some code
}

user = { name: "John Doe" };

// This will not throw an error because the second part of the
// condition is not evaluated if the first part is true
let displayName = user.name || "Guest";
