export function fetchCharacters() {
  return fetch(
    'https://hp-api.onrender.com/api/characters/house/gryffindor'
  ).then((response) => response.json());
}
