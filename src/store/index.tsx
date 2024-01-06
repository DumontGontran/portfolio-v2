import { createSlice, configureStore } from '@reduxjs/toolkit'
import pokedex from '../images/pokedex.webp'

const projetsSlice = createSlice({
  name: 'Projets',
  initialState: {
    projets: [{
      id: 1,
      title: 'Pokedex Classic',
      logo: pokedex,
      alt: 'logo-projet-pokedex-classic',
      technos: 'HTML5, CSS3, Typescript',
      description: 'Online pokedex listing the first 151 pokemons',
      link: 'https://pokedex.gontrandev.fr'
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