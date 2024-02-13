import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'
import { useRecoilState } from 'recoil'
import { whenListAtom } from '../../recoil/atom'

export const When = () => {
  const [whenList, setWhenList] = useRecoilState(whenListAtom)

  const handleAddWhenWithThen = () => {
    const whenItem = {
      title: '',
      items: [],
    }
    const addWhenList = [...whenList, whenItem]
    setWhenList(addWhenList)
  }

  const handleAddVariable = (index: number) => {
    const variableItem = {
      variable: '',
      result: '',
    }
    const addVariables = [...whenList[index].items, variableItem]
  }

  return (
    <Styles.BddStepWrapper>
      <Styles.BddStepWrapper>
        <Styles.BddLabel>
          When
          <Styles.AddButton onClick={handleAddWhenWithThen} />
        </Styles.BddLabel>
        <TextInput placeholder={'사용자 액션을 입력해주세요.'} />
        {whenList.map((when, index) => {
          return (
            <Styles.WhenList key={`when_${index}`}>
              <Styles.TaskWrapper>
                <TextInput placeholder={'사용자 태스크를 입력해주세요.'} />
                <Styles.AddButton onClick={() => handleAddVariable(index)} />
              </Styles.TaskWrapper>
              {when.items.map((variable, variableIndex) => {
                return (
                  <Styles.SubTaskWrapper key={`variable_${variableIndex}`}>
                    <TextInput placeholder="해당 태스크의 경우/변수를 입력해주세요." />
                  </Styles.SubTaskWrapper>
                )
              })}
            </Styles.WhenList>
          )
        })}
      </Styles.BddStepWrapper>
    </Styles.BddStepWrapper>
  )
}
export default When
