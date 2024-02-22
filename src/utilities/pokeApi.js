const pokeEndpoint = 'https://pokeapi.co/api/v2/pokemon/';

async function getData(id) {
  const request = new Request(pokeEndpoint + String(id), {
    mode: 'cors',
  });

  try {
    const response = await fetch(request);
    const data = await response.json();

    return {
      name: data.name,
      imageUrl: data.sprites.front_default,
    };
  } catch (error) {
    return null;
  }
}
