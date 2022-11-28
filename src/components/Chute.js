import styled from "styled-components";

export default function Chute(props) {
    return(
        <ContainerInput>
        <span>Já sei a palavra!</span>
        <input
          disabled={props.desabilitarInput}
          value={props.chute}
          onChange={(e) => props.setChute(e.target.value)}
          data-test="guess-input"
        />
        <button onClick={props.chutarPalavra} data-test="guess-button">
          Chutar
        </button>
      </ContainerInput>
    )
}

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