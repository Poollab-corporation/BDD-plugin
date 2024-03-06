import * as Styles from '../../styles'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

interface WhenProps {
  index: number
  taskIndex: number
  onAddTask: () => void
}

export const When = ({ index, taskIndex, onAddTask }: WhenProps) => {
  const { setValue, control } = useFormContext()
  const { update } = useFieldArray({
    control: control,
    name: `scenarios.${index}.tasks.${taskIndex}.when`,
  })

  const handleTasksAdd = () => {
    onAddTask()
  }

  const handleChangeWhen = (value: string) => {
    setValue(`scenarios.${index}.tasks.${taskIndex}.when`, value)
  }

  return (
    <Styles.BddStepWrapper>
      <Styles.BddStepWrapper>
        <Styles.BddLabel>
          When
          <Styles.AddButton onClick={handleTasksAdd} />
        </Styles.BddLabel>
        <Controller
          render={({ field }) => (
            <>
              <Styles.TextArea
                {...field}
                placeholder={'사용자 액션을 입력해주세요.'}
                onChange={(e) => {
                  handleChangeWhen(e.target.value)
                }}
              />
            </>
          )}
          name={`scenarios.${index}.tasks.${taskIndex}.when`}
        />
      </Styles.BddStepWrapper>
    </Styles.BddStepWrapper>
  )
}
export default When
