import styled from "styled-components";

export default function Letras(props) {
    return(
        <ContainerLetras>
        {props.alfabeto.map((letra) => (
          <button
            key={letra}
            onClick={() => props.clicouLetra(letra)}
            disabled={props.letrasUsadas.includes(letra)}
            data-test="letter"
          >
            {letra.toUpperCase()}
          </button>
        ))}
      </ContainerLetras>
    )
}

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