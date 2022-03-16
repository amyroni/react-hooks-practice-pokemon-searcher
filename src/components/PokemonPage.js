import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(response => response.json())
      .then(data => setPokemon(data))
  }, [])

  function handleFormSubmit(newPoke) {
    setPokemon([...pokemon, newPoke])
  }

  const pokemonToDisplay = pokemon.filter(poke => {
    return poke.name.includes(searchName);
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit={handleFormSubmit}/>
      <br />
      <Search onSearchChange={setSearchName} />
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
