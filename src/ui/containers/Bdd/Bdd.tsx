import * as Styles from './styles'
import Given from './components/Given'
import When from './components/When'
import Then from './components/Then'
import { RecoilRoot } from 'recoil'

export const Bdd = () => {
  return (
    <RecoilRoot>
      <Styles.BddWrapper>
        <Given />
        <When />
        <Then />
      </Styles.BddWrapper>
    </RecoilRoot>
  )
}

export default Bdd
