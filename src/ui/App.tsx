import React from 'react'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyle'
import Header from './components/Header'
import Bdd from './containers/Bdd'
import Footer from './components/Footer'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { FormValues } from '../types/formValue'
import {
  bddDefaultValue,
  scenarioDefaultValue,
} from '../constants/bddDfaultValue'

function App() {
  const methods = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: bddDefaultValue,
  })
  const { append, fields: scenariosFields } = useFieldArray({
    control: methods.control,
    name: 'scenarios',
  })

  const handleScenarioAdd = () => {
    append(scenarioDefaultValue)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FormProvider {...methods}>
        <Header onClick={handleScenarioAdd} />
        <Bdd scenariosFields={scenariosFields} />
        <Footer />
      </FormProvider>
    </ThemeProvider>
  )
}

export default App
