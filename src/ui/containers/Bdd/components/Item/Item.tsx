import React from 'react'
import * as Styles from '../../styles'
import Given from '../Given'
import When from '../When'
import Then from '../Then'
import TextInput from '../../../../components/TextInput'

interface ItemProps {
  scenario: any
  index: number
}
const Item = ({ scenario, index }: ItemProps) => {
  return (
    <Styles.ScenarioWrapper>
      <Styles.ScenarioTitleWrapper>
        <Styles.BddLabel>제목</Styles.BddLabel>
        <TextInput placeholder="시나리오 제목을 입력해주세요." />
      </Styles.ScenarioTitleWrapper>
      <Styles.ItemWrapper>
        <Given index={index} />
        <When index={index} />
        <Then index={index} />
      </Styles.ItemWrapper>
    </Styles.ScenarioWrapper>
  )
}

export default Item
