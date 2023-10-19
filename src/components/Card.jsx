import styled from "styled-components"



const Card = ({cardPokemon}) => {

    return <>
        <h1>{cardPokemon.name}</h1>
        <img src={cardPokemon.image} width="100px"/>
        <div> 
            <p>Type {cardPokemon.type.nameType}:</p>
            <img src={cardPokemon.type.imgSrc}/>
        </div>
        <div>
            <h2>Evolutions :</h2>
            <ul>
                <li>
                    <h3>{cardPokemon.evolution.medium.nameMedium}</h3>
                    <img src={cardPokemon.evolution.medium.imgMedium} alt={cardPokemon.evolution.medium.nameMedium} width="100px"/>
                </li>
                <li>
                    <h3>{cardPokemon.evolution.large.nameLarge}</h3>
                    <img src={cardPokemon.evolution.large.imgLarge} alt={cardPokemon.evolution.large.nameLarge} width="100px"/>
                </li>
            </ul>
        </div>
    </>
}

export default Card