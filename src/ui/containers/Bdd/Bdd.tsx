import * as Styles from './styles'
import Given from './components/Given'
import WhenWithThen from './components/WhenWithThen'
import { useState } from 'react'

export const Bdd = () => {
  const [bddes, setBddes] = useState([
    {
      value: '',
      whenList: [
        {
          value: '',
          then: {},
        },
      ],
    },
  ])

  return (
    <Styles.BddWrapper>
      {bddes.map((bdd, index) => (
        <div key={`bdd_${index}`}>
          <Given />
          <WhenWithThen />
        </div>
      ))}
    </Styles.BddWrapper>
  )
}

export default Bdd
