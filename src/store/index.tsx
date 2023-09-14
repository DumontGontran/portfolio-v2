import { createSlice, configureStore } from '@reduxjs/toolkit'
import booki from '../images/Booki.webp'
import pokedex from '../images/pokedex.webp'
import tesla from '../images/tesla.webp'
import kanap from '../images/kanap.webp'

const projetsSlice = createSlice({
  name: 'Projets',
  initialState: {
    projets: [{
      id: 1,
      title: 'Kanap',
      logo: kanap,
      alt: 'logo-projet-kanap',
      technos: 'HTML5, CSS3, Javascript',
      description: ' e-commerce spécialisé dans la vente de canapé',
      link: 'https://github.com/DumontGontran/Kanap'
    },
    {
      id: 2,
      title: 'Pokedex Classic',
      logo: pokedex,
      alt: 'logo-projet-pokedex-classic',
      technos: 'HTML5, CSS3, Typescript',
      description: 'Site répertoriant les 151 premiers pokémons',
      link: 'https://github.com/DumontGontran/Pokedex-Classic'
    },
    {
      id: 3,
      title: 'Tesla',
      logo: tesla,
      alt: 'logo-projet-tesla',
      technos: 'HTML5, Tailwind, Javascript',
      description: 'Site e-commerce spécialisé dans la vente de voitures et d\'équipements Tesla',
      link: 'https://github.com/DumontGontran/Tesla'
    },
    {
      id: 4,
      title: 'Booki',
      logo: booki,
      alt: 'logo-projet-booki',
      technos: 'HTML5, CSS3',
      description: 'Site pour la recherche d\'activités et d\'hébergements',
      link: 'https://github.com/DumontGontran/Booki'
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