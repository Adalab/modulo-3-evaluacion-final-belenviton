export function fetchCharacters() {
  return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((responseCharacters) => {
      return responseCharacters.map((eachObj) => {
        return {
          id: eachObj.id,
          image: eachObj.image,
          name: eachObj.name,
          species: eachObj.species,
          alive: eachObj.alive,
          gender: eachObj.gender,
          house: eachObj.house,
          alternate_names: eachObj.alternate_names,
        };
      });
    });
}
