import Button from '../Button'
import * as Styles from './styles'
import { useState } from 'react'
export const Footer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const requestToPlugin = (payload: string) => {
    parent.postMessage({ pluginMessage: payload }, '*')
  }

  const test = () => {
    requestToPlugin('createBdd')
  }
  return (
    <Styles.FooterWrapper>
      <Button
        text={isLoading ? '생성중...' : 'BDD 생성'}
        onClick={test}
      ></Button>
    </Styles.FooterWrapper>
  )
}

export default Footer
