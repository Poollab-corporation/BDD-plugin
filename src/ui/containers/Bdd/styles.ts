import styled from 'styled-components'

export const BddWrapper = styled.div`
  height: 370px;
  overflow-y: auto;
  padding: 10px 10px 60px 10px;
  > div:nth-child(n + 2) {
    margin-top: 10px;
  }
`

export const BddStepWrapper = styled.div``

export const BddLabel = styled.p`
  ${(props) => props.theme.fonts[14]};
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  > div {
    flex: 1 1 auto;
  }
`

export const RemoveButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.blue500};
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
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
    height: 20px;
    transform: translate(-50%, -50%);
    background: ${(props) => props.theme.colors.white};
  }
`
