import React from 'react'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyle'
import Header from './components/Header'
import Bdd from './containers/Bdd'
import Footer from './components/Footer'
import { FormProvider, useForm } from 'react-hook-form'

function App() {
  const method = useForm()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FormProvider {...method}>
        <Header />
        <Bdd />
        <Footer />
      </FormProvider>
    </ThemeProvider>
  )
}

export default App
