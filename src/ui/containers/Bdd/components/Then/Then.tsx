import * as Styles from '../../styles'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import SubItem from '../SubItem'

interface ThenProps {
  index: number
}

export const Then = ({ index }: ThenProps) => {
  const { control } = useFormContext()
  const { append, fields } = useFieldArray({
    control: control,
    name: `scenarios.${index}.then`,
  })

  const handleAdd = () => {
    append({ text: '' })
  }

  return (
    <Styles.BddStepWrapper>
      <Styles.BddStepWrapper>
        <Styles.BddLabel>
          Then
          <Styles.AddButton onClick={handleAdd} />
        </Styles.BddLabel>
        {fields?.map((_, thenIndex: number) => {
          return (
            <>
              <Controller
                key={`then${thenIndex}`}
                render={({ field }) => (
                  <>
                    <Styles.TextArea
                      {...field}
                      key={`then${thenIndex}`}
                      placeholder={'사용자 액션의 결과를 입력해주세요.'}
                    />
                  </>
                )}
                name={`scenarios.${index}.then.${thenIndex}.text`}
              />
              <SubItem
                scenarioIndex={index}
                itemIndex={thenIndex}
                name="then"
              />
            </>
          )
        })}
      </Styles.BddStepWrapper>
    </Styles.BddStepWrapper>
  )
}
export default Then
