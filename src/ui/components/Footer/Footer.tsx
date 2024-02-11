import Button from '../Button'
import * as Styles from './styles'
import { useState } from 'react'
import useRandomQuotes from '../../hooks/useRandomQuotes'
import { requestGenerateRandomQuoteToPlugin } from '../../lib/figma'
``
export const Footer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const getRandomQuote = useRandomQuotes()

  const generateRandomQuote = async () => {
    setIsLoading(true)
    const randomQuote = await getRandomQuote()
    requestGenerateRandomQuoteToPlugin(randomQuote)
    setIsLoading(false)
  }

  return (
    <Styles.FooterWrapper>
      <Button
        text={isLoading ? 'Loading...' : 'Random Quote'}
        onClick={generateRandomQuote}
      ></Button>
    </Styles.FooterWrapper>
  )
}

export default Footer
