import React, { useState } from "react";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import palavras from "./palavras";
import styled from "styled-components";

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
  const [letrasUsadas, setLetrasUsadas] = useState(alfabeto);
  const [stringSemAcentos, setStringSemAcentos] = useState("");
  const [chute, setChute] = useState("");
  const [corDaPalavra, setCorDaPalavra] = useState("preto");
  const [dataAnswer, setDataAnswer] = useState("");

  function iniciarJogo() {
    setDesabilitarInput(false);
    setLetrasUsadas([]);
    sortearPalavra();
    setErros(0);
    setChute("");
    setCorDaPalavra("preto");
    setDataAnswer(stringSemAcentos);
    console.log("dataAnswer", stringSemAcentos);
  }

  function finalizarJogo() {
    setLetrasUsadas(alfabeto);
    setDesabilitarInput(true);
    setChute("");
    setPalavra(palavraEscolhida);
  }
  function sortearPalavra() {
    const indice = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[indice];
    const arrayPalavra = palavra.split("");
    setPalavraEscolhida(arrayPalavra);
    let traco = [];
    arrayPalavra.forEach((letra) => traco.push(" _"));
    setPalavra(traco);
    const palavraSemAcento = palavra
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    setStringSemAcentos(palavraSemAcento);
  }

  function clicouLetra(l) {
    setLetrasUsadas([...letrasUsadas, l]);
    if (stringSemAcentos.includes(l)) {
      acertouLetra(l);
    } else {
      errouLetra(l);
    }
  }

  function acertouLetra(l) {
    let novaPalavra = [...palavra];
    palavraEscolhida.forEach((letra, i) => {
      if (stringSemAcentos[i] === l) {
        novaPalavra[i] = letra;
      }
    });
    setPalavra(novaPalavra);
    if (!novaPalavra.includes(" _")) {
      setCorDaPalavra("verde");
      finalizarJogo();
    }
  }
  function errouLetra() {
    const novaQuantidadeErros = erros + 1;
    setErros(novaQuantidadeErros);
    if (novaQuantidadeErros === 6) {
      setCorDaPalavra("vermelho");
      finalizarJogo();
    }
  }

  function chutarPalavra() {
    let stringEscolhida = palavraEscolhida.join("");
    if (chute === stringEscolhida) {
      setCorDaPalavra("verde");
    } else {
      setErros(6);
      setCorDaPalavra("vermelho");
    }
    finalizarJogo();
  }


  return (
    <ContainerTela>
      <ContainerForca>
        <img
          src={imagens[erros]}
          alt="imagem da forca"
          data-test="game-image"
        />
        <button onClick={iniciarJogo} data-test="choose-word">
          Escolher palavra
        </button>
        <h1 className={corDaPalavra} data-test="word" data-answer={dataAnswer}>
          {palavra}
        </h1>
      </ContainerForca>

      <ContainerLetras>
        {alfabeto.map((letra) => (
          <button
            key={letra}
            onClick={() => clicouLetra(letra)}
            disabled={letrasUsadas.includes(letra)}
            data-test="letter"
          >
            {letra.toUpperCase()}
          </button>
        ))}
      </ContainerLetras>
      <ContainerInput>
        <span>Já sei a palavra!</span>
        <input
          disabled={desabilitarInput}
          value={chute}
          onChange={(e) => setChute(e.target.value)}
          data-test="guess-input"
        />
        <button onClick={chutarPalavra} data-test="guess-button">
          Chutar
        </button>
      </ContainerInput>
    </ContainerTela>
  );
}

export default App;

const ContainerTela = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContainerForca = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  position: relative;
  h1 {
    position: absolute;
    top: 350px;
    right: 0;
  }
  img {
    width: 400px;
    height: 466px;
    margin-left: 50px;
  }
  button {
    width: 200px;
    height: 60px;
    background-color: #27ae60;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    font-size: 20px;
    margin-top: 50px;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const ContainerLetras = styled.div`
  width: 750px;
  margin-top: 100px;
  button {
    width: 40px;
    height: 40px;
    background-color: #e1ecf4;
    color: #39739d;
    border-radius: 3px;
    font-weight: 700;
    font-size: 16px;
    border: 1px solid #7aa7c7;
    margin: 8px;
    &:disabled {
      background-color: #9faab5;
      color: #798a9f;
      border: 1px solid #7aa7c7;
    }
  }
`;
const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 650px;
  margin-top: 60px;
  span {
    font-weight: 400;
    font-size: 20px;
  }
  input {
    border: 1px solid #cccccc;
    border-radius: 5px;
    width: 353px;
    height: 40px;
    box-shadow: 2px 2px 5px 0px #00000040;
  }
  button {
    width: 100px;
    height: 40px;
    background-color: #e1ecf4;
    color: #7aa7c7;
    font-weight: 700;
    font-size: 16px;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
    &:hover {
      opacity: 0.8;
    }
  }

`;
