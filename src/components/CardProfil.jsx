import styled from "styled-components"

const ContainerProfil = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    margin-top: 40px;
    padding: 20px;
    background-color: #f08080;
    border-radius: 10px;
    box-shadow: -10px 10px 5px grey;
    transform: perspective(900px) rotateY(30deg);
    margin-bottom: 50px;
`;

const Title = styled.h1`
    font-size: 2em;
    color: #800000;
    margin-left: 20px;
`;

const Title2 = styled.h2`
    font-size: 1.5em;
    color: #800000;
`;

const Paragraphe = styled.p`
    font-weight: bold;
`;


const CardProfil = ({profil}) => {

    return <ContainerProfil>
        <div>
            <img src={profil.image} alt={profil.name} width="200px"/>
        </div>
        <div>
            <Title>{profil.name} {profil.lastname}</Title>
            <Title2>{profil.metier}</Title2>
            <Paragraphe>Contact : {profil.mail}</Paragraphe>
        </div>
    </ContainerProfil>
}

export default CardProfil