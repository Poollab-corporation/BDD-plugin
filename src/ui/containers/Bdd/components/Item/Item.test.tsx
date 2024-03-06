import { render, screen } from '@testing-library/react'
import TextInput from '../../../../components/TextInput'
import React from 'react'
import TestTemplate from '../../../../../templates/TestTemplate/TestTemplate'

const context = describe

describe('시나리오 제목을 입력할 수 있는 입력란이 있다.', () => {
  context('입력란에 입력을 하였을 때,', () => {
    it('입력값이 갱신된다.', () => {
      const testData = [
        {
          scenario_title: '',
        },
        {
          scenario_title: '',
        },
      ]
      const update = (index: number, value: string) => {
        testData[index].scenario_title = value
      }

      render(
        <TestTemplate>
          <TextInput
            placeholder={'시나리오 제목을 입력해주세요.'}
            onChange={(e) => {
              update(0, e.target.value)
            }}
          />
        </TestTemplate>
      )

      update(0, '테스트')
      expect(testData[0].scenario_title).toBe('테스트')
    })
  })
})
