/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './assets/salameche.gif'
import './assets/reptincel.gif'
import './assets/dracaufeu.gif'
import './App.css'
import ContainerCard from './components/ContainerCard'

const cardPokemon = {
  name : "Salamèche",
  image: '../src/assets/salameche.gif',
  type : {
    nameType: "Feu",
    imgSrc : "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png",
  },
  evolution : {
    medium: {
      nameMedium : "Reptincel",
      imgMedium:  '../src/assets/reptincel.gif',
    },
    large: {
      nameLarge : "Dracaufeu",
      imgLarge : '../src/assets/dracaufeu.gif',
    }
  }
};


const App = () => {
  /*const [count, setCount] = useState(0)*/

  return (
    <div>
      < ContainerCard cardPokemon={cardPokemon}/>
    </div>
  )
}

export default App
