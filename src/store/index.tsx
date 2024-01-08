import { createSlice, configureStore } from '@reduxjs/toolkit'

import cocktail1 from "../images/cocktail1.webp"
import hottakes1 from "../images/hottakes1.webp"
import groupomania1 from "../images/groupomania1.webp"

const projetsSlice = createSlice({
  name: 'Projets',
  initialState: {
    projets: [{
      id: 1,
      title: 'Cocktail',
      logo: cocktail1,
      alt: 'logo cocktail',
      technos: 'React(Typescript), NodeJs, ExpressJs, MySQL',
      description: 'Fullstack App - Share your cocktail with people',
      link: 'https://github.com/DumontGontran/Cocktail'
    },
    {
      id: 2,
      title: 'HotTakes',
      logo: hottakes1,
      alt: 'logo hot takes',
      technos: 'NodeJs, ExpressJs, MongoDB',
      description: 'API Rest - Share your spicy sauces with people',
      link: 'https://github.com/DumontGontran/HotTakes/tree/main/backend'
    },
    {
      id: 3,
      title: 'Groupomania',
      logo: groupomania1,
      alt: 'logo groupomania',
      technos: 'VueJs, NodeJs, ExpressJs, MySQL',
      description: 'Fullstack App - Business Social Network',
      link: 'https://github.com/DumontGontran/Groupomania'
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