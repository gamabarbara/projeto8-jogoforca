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

function App() {
  return (
    <div className="container-tela">
      <div className="container-forca">
        <img src={forca0} alt="forca0" />
        <button>Escolher palavra</button>
        <h1>Banana</h1>
      </div>

      <div className="container-letras">
        {alfabeto.map((letra) => (
          <button>{letra.toUpperCase()}</button>
        ))}
      </div>
      <div className="container-input">
        <span>Já sei a palavra!</span>
        <input />
        <button>Chutar</button>
      </div>
    </div>
  );
}

export default App;
