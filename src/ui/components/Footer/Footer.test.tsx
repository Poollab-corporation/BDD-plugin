import { fireEvent, render, screen } from '@testing-library/react'
import TestTemplate from '../../../templates/TestTemplate/TestTemplate'
import Footer from './Footer'
import Button from '../Button'
import * as Styles from './styles'

const context = describe

describe(' Footer에 BDD생성 버튼이 있다.', () => {
  context('BDD생성 버튼을 클릭했을 때', () => {
    it('BDD생성 버튼을 클릭하면 BDD 생성 함수가 호출된다.', () => {
      const onCreateBdd = jest.fn()
      render(
        <TestTemplate>
          <Styles.FooterWrapper>
            <Button text={'BDD 생성'} onClick={onCreateBdd}></Button>
          </Styles.FooterWrapper>
        </TestTemplate>
      )

      const target = screen.getByText(/BDD 생성/)
      fireEvent.click(target)
      expect(onCreateBdd).toBeCalled()
    })
  })
})
