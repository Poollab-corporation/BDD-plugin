import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

interface TestTemplateProps {
  children: JSX.Element | JSX.Element[]
}
export const TestTemplate = ({ children }: TestTemplateProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default TestTemplate
