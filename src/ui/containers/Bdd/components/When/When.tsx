import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'
import { useRecoilState } from 'recoil'
import { whenListAtom } from '../../recoil/atom'

export const When = () => {
  const [whenList, setWhenList] = useRecoilState(whenListAtom)

  const handleAddWhenWithThen = () => {
    console.log('when with then')
  }

  const handleAddWhenTask = () => {
    console.log('handleAddTask')
  }

  return (
    <Styles.BddStepWrapper>
      <Styles.BddStepWrapper>
        <Styles.BddLabel>
          When
          <Styles.AddButton onClick={handleAddWhenWithThen} />
        </Styles.BddLabel>
        <TextInput placeholder={'사용자 액션을 입력해주세요.'} />
        <Styles.TaskWrapper>
          <TextInput placeholder={'사용자 태스크를 입력해주세요.'} />
          <Styles.AddButton onClick={handleAddWhenTask} />
        </Styles.TaskWrapper>
        {whenList.map((variable, index) => {
          return (
            <Styles.SubTaskWrapper key={`variable_index_${index}`}>
              <TextInput placeholder={'사용자 태스크를 입력해주세요.'} />
            </Styles.SubTaskWrapper>
          )
        })}
      </Styles.BddStepWrapper>
    </Styles.BddStepWrapper>
  )
}
export default When
