import { createSlice, configureStore } from '@reduxjs/toolkit'
import pokedex from '../images/pokedex.webp'
import tesla from '../images/tesla.webp'
import ohmyfood from '../images/ohmyfood.webp'

const projetsSlice = createSlice({
  name: 'Projets',
  initialState: {
    projets: [{
      id: 1,
      title: 'OhMyFood!',
      logo: ohmyfood,
      alt: 'logo-projet-ohmyfood',
      technos: 'HTML5, CSS3, SASS',
      description: 'Online Catering Web App',
      link: 'https://ohmyfood.gontrandev.fr'
    }, {
      id: 2,
      title: 'Pokedex Classic',
      logo: pokedex,
      alt: 'logo-projet-pokedex-classic',
      technos: 'HTML5, CSS3, Typescript',
      description: 'Online pokedex listing the first 151 pokemons',
      link: 'https://pokedex.gontrandev.fr'
    }, {
      id: 3,
      title: 'Tesla',
      logo: tesla,
      alt: 'logo-projet-tesla',
      technos: 'HTML5, TailwindCSS, Javascript',
      description: 'Tesla clone website',
      link: 'https://tesla.gontrandev.fr'
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