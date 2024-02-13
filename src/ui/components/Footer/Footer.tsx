import Button from '../Button'
import * as Styles from './styles'
import { useState } from 'react'
import { FieldValues, useFormContext } from 'react-hook-form'
export const Footer = () => {
  const [isLoading, setIsLoading] = useState(false)

  const method = useFormContext()
  const requestToPlugin = (payload: any) => {
    parent.postMessage({ pluginMessage: payload }, '*')
  }

  const onCreateBdd = (values: FieldValues) => {
    console.log(values)
    // requestToPlugin({
    //   type: 'createBdd',
    //   postData: {
    //     title: values.title,
    //     authority: values.authority,
    //     url: values.url,
    //   },
    // })
  }

  // const payload = {
  //   title: '',
  //   url: '',
  //   gwt: [
  //     {
  //       given: {
  //         title: '',
  //         item: '',
  //       },
  //       when: {
  //         title: '',
  //         items: [
  //           {
  //             item: '',
  //             subItems: [],
  //           },
  //         ],
  //       },
  //       then: {
  //         title: '',
  //         items: [
  //           {
  //             item: '',
  //             subItems: [],
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // }
  return (
    <Styles.FooterWrapper>
      <Button
        text={isLoading ? '생성중...' : 'BDD 생성'}
        onClick={method.handleSubmit(onCreateBdd)}
      ></Button>
    </Styles.FooterWrapper>
  )
}

export default Footer
