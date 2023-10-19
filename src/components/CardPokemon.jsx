import styled from "styled-components"

const Container = styled.div`
    border-radius: 10px;
    background-color: #48d1cc;
    padding : 10px;
    box-shadow: -10px 10px 5px grey;
    margin-top: 20px;
`;

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    align-itemq: center;
    list-style-type: none;
    margin-right: 45px;
`;

const TextImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: maroon;
`;

const Title2 = styled.h2`
    color: maroon;
    text-decoration: underline;
`;

const Title3 = styled.h3`
    color: maroon;
    margin-right: 10px;
`;


const CardPokemon = ({cardPokemon}) => {

    return <Container>
        <Title>{cardPokemon.name}</Title>
        <img src={cardPokemon.image} width="100px"/>
        <TextImg> 
            <Title3>Type {cardPokemon.type.nameType} : </Title3>
            <img src={cardPokemon.type.imgSrc} width="60px"/>
        </TextImg>
        <div>
            <Title2>Evolutions</Title2>
            <List>
                <li>
                    <Title3>{cardPokemon.evolution.medium.nameMedium}</Title3>
                    <img src={cardPokemon.evolution.medium.imgMedium} alt={cardPokemon.evolution.medium.nameMedium} width="100px"/>
                </li>
                <li>
                    <Title3>{cardPokemon.evolution.large.nameLarge}</Title3>
                     <img src={cardPokemon.evolution.large.imgLarge} alt={cardPokemon.evolution.large.nameLarge} width="100px"/>
                </li>
            </List>
        </div>
    </Container>
}

export default CardPokemon