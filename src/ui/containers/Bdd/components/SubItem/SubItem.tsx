import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

interface SubItemProps {
  scenarioIndex: number
  itemIndex: number
  name: string
}

export const SubItem = ({ scenarioIndex, name, itemIndex }: SubItemProps) => {
  const { control } = useFormContext()
  const { fields, append } = useFieldArray({
    control: control,
    name: `scenarios.${scenarioIndex}.${name}.${itemIndex}.subItems`,
  })

  const handleSubItemAdd = () => {
    append({ text: '' })
  }

  if (fields.length < 1) {
    return (
      <button type="button" onClick={handleSubItemAdd}>
        추가
      </button>
    )
  }
  return (
    <>
      {fields?.map((subItem, subIndex) => {
        return (
          <Styles.SubThenWrapper key={`variable_index_${subIndex}`}>
            <button type="button" onClick={handleSubItemAdd}>
              추가
            </button>
            <Controller
              key={`${name}_sub_${subIndex}`}
              render={({ field }) => (
                <TextInput
                  {...field}
                  key={`${name}_${subIndex}`}
                  placeholder={'변수'}
                />
              )}
              name={`scenarios.${scenarioIndex}.${name}.${itemIndex}.subItems.${subIndex}.text`}
            />
          </Styles.SubThenWrapper>
        )
      })}
    </>
  )
}
export default SubItem
