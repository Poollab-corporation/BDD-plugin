import * as Styles from './styles'
import Given from './components/Given'
import When from './components/When'
import Then from './components/Then'
import { useState } from 'react'

export const Bdd = () => {
  return (
    <Styles.BddWrapper>
      <Given />
      <When />
      <Then />
    </Styles.BddWrapper>
  )
}

export default Bdd
