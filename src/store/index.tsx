import { createSlice, configureStore } from '@reduxjs/toolkit'

const projetsSlice = createSlice({
  name: 'Projets',
  initialState: {
    projets: [{
      id: 1,
      title: '',
      logo: '',
      alt: '',
      technos: '',
      description: '',
      link: ''
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