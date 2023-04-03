import { createSlice, configureStore } from '@reduxjs/toolkit'
import booki from '../images/Booki.png'
import cocktail from '../images/cocktail.png'
import todolist from '../images/todolist.png'
import fizzbuzz from '../images/fizzbuzz.png'
import pokedex from '../images/pokedex.jpg'
import tesla from '../images/tesla.png'
import groupomania from '../images/groupomania.png'
import ohMyFood from '../images/ohmyfood.jpg'
import kanap from '../images/kanap.png'
import laChouetteAgence from '../images/lachouetteagence.png'
import hotTakes from '../images/hottakes.png'
import mariageAudeTristan from '../images/mariageaudetristan.png'

const projetsSlice = createSlice({
  name: 'Projets',
  initialState: {
    projets: [{
      id: 1,
      title: 'Cocktail',
      logo: cocktail,
      alt: 'logo-projet-cocktail',
      technos: 'React, CSS3, Javascript, NodeJS, ExpressJS, MySQL',
      description: 'Site spécialisé dans le partage de recettes de cocktails',
      link: 'https://github.com/DumontGontran/Cocktail'
    },
    {
      id: 2,
      title: 'Todolist',
      logo: todolist,
      alt: 'logo-exercice-todolist',
      technos: 'React, Redux, Tailwind, Typescript',
      description: 'Exercice: gestion de tâches quotidiennes',
      link: 'https://github.com/DumontGontran/todolist'
    },
    {
      id: 3,
      title: 'FizzBuzz',
      logo: fizzbuzz,
      alt: 'logo-exercice-fizzbuzz',
      technos: 'React, CSS3, Typescript',
      description: 'Exercice: entrainement à l\'algorithmie',
      link: 'https://github.com/DumontGontran/fizzbuzz'
    },
    {
      id: 4,
      title: 'Pokedex Classic',
      logo: pokedex,
      alt: 'logo-projet-pokedex-classic',
      technos: 'Typescript, CSS3, API(PokeAPI)',
      description: 'Site répertoriant les 151 premiers pokémons',
      link: 'https://github.com/DumontGontran/Pokedex-Classic'
    },
    {
      id: 5,
      title: 'Mariage Aude Tristan',
      logo: mariageAudeTristan,
      alt: 'logo-projet-mariage-aude-tristan',
      technos: 'Vue(Styled-Components with SASS), VueX, Javascript, NodeJS, ExpressJS, MySQL',
      description: 'Réseau social familial de mariage',
      link: 'https://github.com/DumontGontran/Mariage-Aude-Tristan'
    },
    {
      id: 6,
      title: 'Groupomania',
      logo: groupomania,
      alt: 'logo-projet-groupomania',
      technos: 'Vue(Styled-Components with SASS), Javascript, NodeJS, ExpressJS, MySQL',
      description: 'Réseau social d\'entreprise en ligne',
      link: 'https://github.com/DumontGontran/Groupomania'
    },
    {
      id: 7,
      title: 'Tesla',
      logo: tesla,
      alt: 'logo-projet-tesla',
      technos: 'HTML, Tailwind, Javascript, JSON',
      description: 'Site e-commerce spécialisé dans la vente de voitures et d\'équipements Tesla',
      link: 'https://github.com/DumontGontran/Tesla'
    },
    {
      id: 8,
      title: 'HotTakes',
      logo: hotTakes,
      alt: 'logo-projet-hot-takes',
      technos: 'Javascript, NodeJS, ExpressJS, MongoDB',
      description: 'Site spécialisé dans le partage de sauces pimentées',
      link: 'https://github.com/DumontGontran/HotTakes'
    },
    {
      id: 9,
      title: 'La Chouette Agence',
      logo: laChouetteAgence,
      alt: 'logo-projet-la-chouette-agence',
      technos: 'HTML5, CSS3, Javascript, JSON',
      description: 'Site e-commerce spécialisé dans la vente de canapés en ligne',
      link: 'https://github.com/DumontGontran/La-Chouette-Agence'
    },
    {
      id: 10,
      title: 'Kanap',
      logo: kanap,
      alt: 'logo-projet-kanap',
      technos: 'HTML5, CSS3, BootStrap',
      description: 'Site d\'une agence en ligne offrant ses services en matière de SEO',
      link: 'https://github.com/DumontGontran/Kanap'
    },
    {
      id: 11,
      title: 'OhMyFood',
      logo: ohMyFood,
      alt: 'logo-projet-oh-my-food',
      technos: 'HTML5, SASS',
      description: 'Site e-commerce pour la restauration. Commande en ligne',
      link: 'https://github.com/DumontGontran/OhMyFood'
    },
    {
      id: 12,
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