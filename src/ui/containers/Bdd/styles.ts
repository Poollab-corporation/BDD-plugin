import styled from 'styled-components'

export const BddWrapper = styled.div`
  display: flex;
  height: 260px;
  margin-bottom: 100px;
  padding: 20px 10px;
  position: relative;
  gap: 10px;
  overflow-y: scroll;
  &:before {
    content: '';
    position: absolute;
    top: 94px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.colors.neutralGray300};
  }
`

export const BddStepWrapper = styled.div<{ $isSelectBox?: boolean }>`
  flex: ${(props) => (props.$isSelectBox ? '1 1 35%' : '0 0 25%')};
`

export const BddInputWrapper = styled.div``

export const BddLabel = styled.div`
  display: flex;
  height: 20px;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  margin-bottom: 6px;
`
export const DescriptionWrapper = styled.div`
  margin-top: 20px;
`

export const TaskWrapper = styled(DescriptionWrapper)`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  > div {
    flex: 0 0 calc(100% - 30px);
  }
  > button {
    flex: 0 0 20px;
  }
`

export const WhenList = styled.div``

export const SubTaskWrapper = styled.div`
  position: relative;
  padding-left: 34px;
  margin-top: 10px;
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    height: 28px;
    width: 20px;
    left: 20px;
    border: 1px solid #bebebe;
    border-right: none;
    border-top: none;
  }
`

export const ThenWrapper = styled(TaskWrapper)`
  display: flex;
  > div {
    flex: 1;
  }
`

export const SubThenWrapper = styled(SubTaskWrapper)`
  display: flex;
  gap: 10px;
  > div {
    flex: 1;
  }
`
export const RemoveButton = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.blue500};
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 2px;
    transform: translate(-50%, -50%);
    background: ${(props) => props.theme.colors.white};
  }
`
export const AddButton = styled(RemoveButton)`
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 10px;
    transform: translate(-50%, -50%);
    background: ${(props) => props.theme.colors.white};
  }
`
