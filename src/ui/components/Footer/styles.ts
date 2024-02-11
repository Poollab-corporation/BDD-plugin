import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  padding: 10px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background: ${(props) => props.theme.colors.white};
`
