import {render, screen} from '@testing-library/react'
import Then from './Then'
import TestTemplate from "../../../../../templates/TestTemplate/TestTemplate";

const context = describe

const whenWithThen = [
  {
    action: '',
    task: '',
    then: {
      actionResult: '',
      taskResult: '',
    },
  },
]

const onAddWhenWithThen = () => {
  const initWhenWithThen = {
    action: '',
    task: '',
    then: {
      actionResult: '',
      taskResult: '',
    },
  }
  whenWithThen.push(initWhenWithThen)
}

describe('Then 영역에 추가 버튼이 있다.', () => {
  render(
    <TestTemplate>
      <Then />
    </TestTemplate>
  )
  context('추가 버튼을 실행한다.', () => {
    onAddWhenWithThen()
    it('When과 Then이 추가된다.', () => {
      expect(whenWithThen.length).toBe(2)
    })
  })
})
