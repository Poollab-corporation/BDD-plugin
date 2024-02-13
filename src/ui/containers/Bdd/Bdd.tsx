import * as Styles from './styles'
import Item from './components/Item'

interface BddProps {
  scenariosFields: any
}

export const Bdd = ({ scenariosFields }: BddProps) => {
  return (
    <Styles.BddWrapper>
      {scenariosFields?.map((scenario, index) => {
        return <Item key={index} scenario={scenario} index={index} />
      })}
    </Styles.BddWrapper>
  )
}

export default Bdd
