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
    return <Styles.ExpandedButton type="button" onClick={handleSubItemAdd} />
  }
  return (
    <>
      {fields?.map((subItem, subIndex) => {
        return (
          <Styles.SubThenWrapper key={`variable_index_${subIndex}`}>
            <Styles.AddButton type="button" onClick={handleSubItemAdd} />
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
