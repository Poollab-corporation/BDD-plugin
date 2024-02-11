import React from 'react'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyle'
import Header from './components/Header'
import Bdd from './containers/Bdd'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Bdd />
      <Footer />
    </ThemeProvider>
  )
}

export default App
