import { createSlice, configureStore } from '@reduxjs/toolkit'
import pokedex from '../images/pokedex.webp'
import kanap from '../images/kanap.webp'
import cocktail from '../images/cocktail.webp'

const projetsSlice = createSlice({
  name: 'Projets',
  initialState: {
    projets: [{
      id: 1,
      title: 'Cocktail',
      logo: cocktail,
      alt: 'logo-projet-cocktail',
      technos: 'React.js, CSS3',
      description: 'Partage de cocktails',
      link: 'https://github.com/DumontGontran/Cocktail'
    }, {
      id: 2,
      title: 'Pokedex Classic',
      logo: pokedex,
      alt: 'logo-projet-pokedex-classic',
      technos: 'HTML5, CSS3, Typescript',
      description: 'répertorie les 151 premiers pokémons',
      link: 'https://github.com/DumontGontran/Pokedex-Classic'
    }, {
      id: 3,
      title: 'Kanap',
      logo: kanap,
      alt: 'logo-projet-kanap',
      technos: 'HTML5, CSS3, Javascript',
      description: 'e-commerce spécialisé dans la vente de canapé',
      link: 'https://github.com/DumontGontran/Kanap'
    }]
  },
  reducers: {

  }
})

export const store = configureStore({
  reducer: {
    Projets: projetsSlice.reducer
  }
})