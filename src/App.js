import "./styles.css";
//Hooks
import { useState, useEffect } from "react";
import Usuario from "./components/usuario";
const source = "https://www.breakingbadapi.com/api/characters";

export default function App() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [counter, setCounter] = useState(0);

  console.debug("Component Rendered");

  useEffect(() => {
    console.debug("First load of the user lists");
    //Promesa 1 respuesta del servidor
    fetch(source)
      .then((response) => {
        if (response.status === 200) {
          //Promesa 2 transformacion de la respuesta en un json
          response.json().then((data) => {
            //console.log(data);
            console.debug("Received the user list");
            const newUserList = data.map((character) => {
              return {
                username: character.name,
                picture: character.img
              };
            });
            setListaUsuarios(newUserList);
            //console.log(listaUsuarios);
          });
        }

        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.debug("User list loaded");
    console.log(listaUsuarios);
  }, [listaUsuarios]);

  if (listaUsuarios.length === 0) {
    console.debug("Already printed the screen");
    return <div>No data has been received</div>;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <p>Total: {counter}</p>
        <button
          onClick={(event) => {
            setCounter(counter + 1);
          }}
        >
          Add 1
        </button>
      </div>
      {listaUsuarios.map((usuario) => (
        <Usuario username={usuario.username} image={usuario.picture} />
      ))}
    </div>
  );
}
