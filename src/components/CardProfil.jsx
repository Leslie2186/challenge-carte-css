import styled from "styled-components"



const CardProfil = ({profil}) => {

    return <section>
        <h1>{profil.name} {profil.lastname}</h1>
        <img src={profil.image} alt={profil.name} width="200px"/>
    </section>
}

export default CardProfil