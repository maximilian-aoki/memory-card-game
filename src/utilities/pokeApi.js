import { generateIdArr } from './utils';

const pokeEndpoint = 'https://pokeapi.co/api/v2/pokemon/';

// helper fetch function that resolves to the Pokemon object, or null if request fails
async function _getPokemonObj(intId) {
  const request = new Request(pokeEndpoint + String(intId), {
    mode: 'cors',
  });

  try {
    const response = await fetch(request);
    const data = await response.json();

    return {
      id: intId,
      name: data.name,
      imageUrl: data.sprites.front_default,
    };
  } catch (error) {
    return null;
  }
}

async function getPokemonArr(size = 8, maxInt = 50) {
  const idArr = generateIdArr(size, maxInt);

  const fullPokemonArr = await Promise.all(
    idArr.map(async (id) => {
      return _getPokemonObj(id);
    }),
  );

  return fullPokemonArr;
}

// exports
export { getPokemonArr };
