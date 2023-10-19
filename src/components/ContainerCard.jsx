import CardPokemon from "./CardPokemon"
import CardProfil from "./CardProfil"



const ContainerCard = ({cardPokemon, profil}) => {

    return (
        <div>
            <CardPokemon cardPokemon={cardPokemon}/>
            <CardProfil profil={profil}/>
        </div>
    )
}

export default ContainerCard