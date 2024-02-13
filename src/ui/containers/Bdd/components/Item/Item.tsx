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
    <Styles.ItemWrapper>
      <div>제목</div>
      <TextInput placeholder="시나리오 제목을 입력해주세요." />
      <Given index={index} />
      <When index={index} />
      <Then index={index} />
    </Styles.ItemWrapper>
  )
}

export default Item
