import Button from '../Button'
import * as Styles from './styles'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
export const Footer = () => {
  const [isLoading, setIsLoading] = useState(false)

  const method = useFormContext()
  const requestToPlugin = (payload: any) => {
    parent.postMessage({ pluginMessage: payload }, '*')
  }

  const onCreateBdd = () => {
    requestToPlugin({
      type: 'createBdd',
      postData: {
        title: method.getValues('title'),
        authority: method.getValues('authority'),
        url: method.getValues('url'),
      },
    })
    console.log(method.getValues())
  }
  return (
    <Styles.FooterWrapper>
      <Button
        text={isLoading ? '생성중...' : 'BDD 생성'}
        onClick={onCreateBdd}
      ></Button>
    </Styles.FooterWrapper>
  )
}

export default Footer
