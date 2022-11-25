import React, { useState } from "react";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import palavras from "./palavras";

const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

function App() {
  const [desabilitarInput, setDesabilitarInput] = useState(true);
  const [erros, setErros] = useState(0);
  const [palavraEscolhida, setPalavraEscolhida] = useState([]);
  const [palavra, setPalavra] = useState([]);

  function iniciarJogo() {
    setDesabilitarInput(false);
    sortearPalavra();
  }

  function sortearPalavra() {
    const indice = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[indice];
    const arrayPalavra = palavra.split("");
    setPalavraEscolhida(arrayPalavra);
    let traco = [];
    arrayPalavra.forEach((letra) => traco.push(" _"))
    setPalavra(traco);

  }

  return (
    <div className="container-tela">
      <div className="container-forca">
        <img src={imagens[erros]} alt="imagem da forca" />
        <button onClick={iniciarJogo}>Escolher palavra</button>
        <h1>{palavra}</h1>
      </div>

      <div className="container-letras">
        {alfabeto.map((letra) => (
          <button key={letra}>
            {letra.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="container-input">
        <span>Já sei a palavra!</span>
        <input disabled={desabilitarInput} />
        <button>Chutar</button>
      </div>
    </div>
  );
}

export default App;
