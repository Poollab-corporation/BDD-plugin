import { FIGMA_COLORS } from '../../constants/colors'

const generateLink = (payload: any) => {
  const linkText = figma.createText()
  linkText.fontName = { family: 'Roboto', style: 'Regular' }
  linkText.characters = '기획서 바로가기'
  linkText.fontSize = 36
  linkText.textDecoration = 'UNDERLINE'
  linkText.x = 800
  linkText.y = 20
  linkText.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.BLACK,
    },
  ]
  linkText.hyperlink = {
    type: 'URL',
    value: payload.postData.url,
  }
  return linkText
}

export default generateLink
