import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onFormSubmit }) {
  const [pokeName, setPokeName] = useState("");
  const [pokeHP, setPokeHP] = useState("");
  const [pokeFrontImg, setPokeFrontImg] = useState("");
  const [pokeBackImg, setPokeBackImg] = useState("");

  // const [pokeObj, setPokeObj] = useState({
  //   name: "",
  //   hp: "",
  //   sprites: {
  //     front: "",
  //     back: "",
  //   }
  // })

  function handleChangeName(event) {
    setPokeName(event.target.value);
  }

  function handleChangeHP(event) {
    setPokeHP(event.target.value);
  }

  function handleChangeFrontImg(event) {
    setPokeFrontImg(event.target.value);
  }

  function handleChangeBackImg(event) {
    setPokeBackImg(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const pokeObj = {
      name: pokeName,
      hp: pokeHP,
      sprites: {
        front: pokeFrontImg,
        back: pokeBackImg
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokeObj)
    }).then(response => response.json())
      .then(data => onFormSubmit(data))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(event) => {
          console.log("submitting form...");
          handleSubmitForm(event);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => handleChangeName(e)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => handleChangeHP(e)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => handleChangeFrontImg(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => handleChangeBackImg(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
