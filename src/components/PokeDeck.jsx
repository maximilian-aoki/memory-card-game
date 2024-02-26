export default function PokeDeck({ allPokemon, onGuess }) {
  return (
    <>
      {allPokemon.map((pokemonObj) => {
        return (
          <div
            key={pokemonObj.id}
            data-id={pokemonObj.id}
            className="pokemon-card grid"
            onClick={onGuess}
          >
            <img src={pokemonObj.imageUrl} alt={pokemonObj.name} />
            <p>{pokemonObj.name}</p>
          </div>
        );
      })}
    </>
  );
}
