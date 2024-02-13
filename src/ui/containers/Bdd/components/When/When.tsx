import * as Styles from '../../styles'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import SubItem from '../SubItem'

interface WhenProps {
  index: number
}

export const When = ({ index }: WhenProps) => {
  const { control } = useFormContext()
  const { append: whenAppend, fields: whenFields } = useFieldArray({
    control: control,
    name: `scenarios.${index}.when`,
  })

  const handleWhenAdd = () => {
    whenAppend({ text: '' })
  }

  return (
    <Styles.BddStepWrapper>
      <Styles.BddStepWrapper>
        <Styles.BddLabel>
          When
          <Styles.AddButton onClick={handleWhenAdd} />
        </Styles.BddLabel>
        {whenFields?.map((_, whenIndex: number) => {
          return (
            <>
              <Controller
                key={`when_${whenIndex}`}
                render={({ field }) => (
                  <>
                    <textarea
                      {...field}
                      key={`when_${whenIndex}`}
                      placeholder={'사용자 액션을 입력해주세요.'}
                    />
                  </>
                )}
                name={`scenarios.${index}.when.${whenIndex}.text`}
              />
              <SubItem
                scenarioIndex={index}
                itemIndex={whenIndex}
                name="when"
              />
            </>
          )
        })}
      </Styles.BddStepWrapper>
    </Styles.BddStepWrapper>
  )
}
export default When
