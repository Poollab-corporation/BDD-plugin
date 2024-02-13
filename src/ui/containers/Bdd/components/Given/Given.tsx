import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

interface GivenProps {
  index: number
}

export const Given = ({ index }: GivenProps) => {
  const { control } = useFormContext()
  const { append, fields } = useFieldArray({
    control: control,
    name: `scenarios.${index}.given`,
  })

  const handleGivenAdd = () => {
    append({ text: '' })
  }

  return (
    <Styles.BddStepWrapper>
      <Styles.BddLabel>
        Given
        <Styles.AddButton onClick={handleGivenAdd} />
      </Styles.BddLabel>
      {fields?.map((given, givenIndex: number) => {
        return (
          <Controller
            key={`given_${givenIndex}`}
            render={({ field }) => (
              <TextInput
                {...field}
                key={`given_${givenIndex}`}
                placeholder={'요소/환경을 입력해주세요.'}
              />
            )}
            name={`scenarios.${index}.given.${givenIndex}.text`}
          />
        )
      })}
    </Styles.BddStepWrapper>
  )
}
export default Given
