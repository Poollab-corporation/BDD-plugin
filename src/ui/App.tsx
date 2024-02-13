import React from 'react'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyle'
import Header from './components/Header'
import Bdd from './containers/Bdd'
import Footer from './components/Footer'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'

type FormValues = {
  title: string
  authority: string
  url: string
  scenarios: {
    given: {
      text: string
    }[]
    when: {
      text: string
      subItems?: {
        text: string
      }[]
    }[]
    then: {
      text: string
    }[]
  }[]
}

function App() {
  const methods = useForm<FormValues>({
    defaultValues: {
      title: '',
      authority: '',
      url: '',
      scenarios: [
        {
          given: [
            {
              text: '',
            },
          ],
          when: [
            {
              text: '',
            },
          ],
          then: [
            {
              text: '',
            },
          ],
        },
      ],
    },
  })
  const { append, fields: scenariosFields } = useFieldArray({
    control: methods.control,
    name: 'scenarios',
  })

  const handleScenarioAdd = () => {
    append({
      given: [
        {
          text: '',
        },
      ],
      when: [
        {
          text: '',
        },
      ],
      then: [
        {
          text: '',
        },
      ],
    })
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
