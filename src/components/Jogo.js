import styled from "styled-components";

export default function Jogo(props) {
    return(
        <ContainerForca>
        <img
          src={props.imagens[props.erros]}
          alt="imagem da forca"
          data-test="game-image"
        />
        <button onClick={props.iniciarJogo} data-test="choose-word">
          Escolher palavra
        </button>
        <h1 className={props.corDaPalavra} data-test="word" data-answer={props.dataAnswer}>
          {props.palavra}
        </h1>
      </ContainerForca>
    )
}

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