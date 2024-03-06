import * as Styles from '../../styles'
import React from 'react'
import Given from '../../components/Given'
import When from '../../components/When'
import Then from '../../components/Then'
import { useFieldArray, useFormContext } from 'react-hook-form'

interface TasksProps {
  tasks: any
  index: number
}

const Tasks = ({ tasks, index }: TasksProps) => {
  const { control } = useFormContext()
  const { append } = useFieldArray({
    control: control,
    name: `scenarios.${index}.tasks`,
  })

  const onAddTask = () => {
    append({ type: 'main', given: '', when: '', then: '' })
    console.log(control)
  }

  return (
    <>
      {tasks?.map((task: any, taskIndex: number) => {
        return (
          <Styles.ItemWrapper key={`task_${index}_${taskIndex}`}>
            <Given index={index} taskIndex={taskIndex} onAddTask={onAddTask} />
            <When index={index} taskIndex={taskIndex} onAddTask={onAddTask} />
            <Then index={index} taskIndex={taskIndex} onAddTask={onAddTask} />
          </Styles.ItemWrapper>
        )
      })}
    </>
  )
}
export default Tasks
