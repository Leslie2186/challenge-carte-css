import styled from "styled-components"
import Card from "./Card"

const Container = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    background-color: lightsalmon;
    padding : 10px;
    width: 400px;
`;


const ContainerCard = ({cardPokemon}) => {

    return (
        <Container>
            <Card cardPokemon={cardPokemon}/>
        </Container>
    )
}

export default ContainerCard