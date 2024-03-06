import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

interface GivenProps {
  index: number
  taskIndex: number
  onAddTask: () => void
}

export const Given = ({ index, taskIndex, onAddTask }: GivenProps) => {
  const { setValue, control } = useFormContext()
  const { update } = useFieldArray({
    control: control,
    name: `scenarios.${index}.tasks.${taskIndex}.given`,
  })

  const handleTasksAdd = () => {
    onAddTask()
  }

  const handleChangeGiven = (value: string) => {
    setValue(`scenarios.${index}.tasks.${taskIndex}.given`, value)
  }

  return (
    <Styles.BddStepWrapper>
      <Styles.BddLabel>
        Given
        <Styles.AddButton onClick={handleTasksAdd} />
      </Styles.BddLabel>
      <Controller
        render={({ field }) => (
          <TextInput
            {...field}
            placeholder={'요소/환경을 입력해주세요.'}
            onChange={(e) => {
              handleChangeGiven(e.target.value)
            }}
          />
        )}
        name={`scenarios.${index}.tasks.${taskIndex}.given`}
      />
    </Styles.BddStepWrapper>
  )
}
export default Given
