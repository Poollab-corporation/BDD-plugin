import * as Styles from '../../styles'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import SubItem from '../SubItem'

interface ThenProps {
  index: number
  taskIndex: number
  onAddTask: () => void
}

export const Then = ({ index, taskIndex, onAddTask }: ThenProps) => {
  const { setValue, control } = useFormContext()
  const { update } = useFieldArray({
    control: control,
    name: `scenarios.${index}.tasks.${taskIndex}.then`,
  })

  const handleTasksAdd = () => {
    onAddTask()
  }

  const handleChangeThen = (value: string) => {
    setValue(`scenarios.${index}.tasks.${taskIndex}.then`, value)
  }
  return (
    <Styles.BddStepWrapper>
      <Styles.BddStepWrapper>
        <Styles.BddLabel>
          Then
          <Styles.AddButton onClick={handleTasksAdd} />
        </Styles.BddLabel>
        <Controller
          render={({ field }) => (
            <>
              <Styles.TextArea
                {...field}
                placeholder={'사용자 액션의 결과를 입력해주세요.'}
                onChange={(e) => {
                  handleChangeThen(e.target.value)
                }}
              />
            </>
          )}
          name={`scenarios.${index}.tasks.${taskIndex}.then`}
        />
      </Styles.BddStepWrapper>
    </Styles.BddStepWrapper>
  )
}
export default Then
