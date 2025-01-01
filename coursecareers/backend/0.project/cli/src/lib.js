const baseUrl = "http://localhost:3000";

export const getFavorites = async () => {
  const response = await fetch(`${baseUrl}/favorites`);
  const json = await response.json();
  return json.favorites;
};

export const getFavorite = async (id) => {
  const response = await fetch(`${baseUrl}/favorites/${id}`);
  const json = await response.json();
  return json.favorite;
};

const result = await getFavorite(7);
console.log(result);

export const addFavorite = async (name, url) => {
  const response = await fetch(`${baseUrl}/favorites`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, url }),
  });

  const json = await response.json();
  return json.id;
};

const newFavId = await addFavorite("example", "example");
console.log(newFavId, await getFavorite(newFavId));
