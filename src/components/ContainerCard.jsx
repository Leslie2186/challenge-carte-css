import CardPokemon from "./CardPokemon"
import CardProfil from "./CardProfil"
import styled from "styled-components"

const ContainerCards = styled.div`
    display: grid;
    grid-template-column: 1fr;
    gap: 50px;
`;


const ContainerCard = ({cardPokemon, profil}) => {

    return (
        <ContainerCards>
            <CardPokemon cardPokemon={cardPokemon}/>
            <CardProfil profil={profil}/>
        </ContainerCards>
    )
}

export default ContainerCard