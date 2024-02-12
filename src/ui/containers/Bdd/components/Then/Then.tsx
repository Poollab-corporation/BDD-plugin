import * as Styles from '../../styles'
import TextInput from '../../../../components/TextInput'
import Select from 'react-select'
import { TASK_OPTIONS } from '../../../../../constants/task'
import { useRecoilValue } from 'recoil'
import { whenListAtom } from '../../recoil/atom'

export const Then = () => {
  const whenList = useRecoilValue(whenListAtom)

  return (
    <Styles.BddStepWrapper $isSelectBox={true}>
      <Styles.BddStepWrapper>
        <Styles.BddLabel>Then</Styles.BddLabel>
        <TextInput placeholder={'액션 결과를 입력해주세요.'} />
        <Styles.ThenWrapper>
          <TextInput placeholder={'태스크 결과를 입력해주세요.'} />
          <Select
            options={TASK_OPTIONS}
            defaultValue={TASK_OPTIONS[0]}
            menuPortalTarget={document.body}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            menuShouldScrollIntoView={false}
          />
        </Styles.ThenWrapper>
        {whenList.map((variable, index) => {
          return (
            <Styles.SubThenWrapper key={`variable_index_${index}`}>
              <TextInput placeholder={'태스크 결과를 입력해주세요.'} />
              <Select
                options={TASK_OPTIONS}
                defaultValue={TASK_OPTIONS[0]}
                menuPortalTarget={document.body}
                styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                menuShouldScrollIntoView={false}
              />
            </Styles.SubThenWrapper>
          )
        })}
      </Styles.BddStepWrapper>
    </Styles.BddStepWrapper>
  )
}
export default Then
