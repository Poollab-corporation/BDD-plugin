import { FIGMA_COLORS } from '../../constants/colors'
import generateBadge from './generateBadge'
import generateLink from './generateLink'

const generateTitleWrapper = (payload: any) => {
  const titleWrapperFrame = figma.createFrame()
  titleWrapperFrame.name = 'BDD 상단영역 프레임'
  titleWrapperFrame.resize(1135, 83)
  titleWrapperFrame.x = 80
  titleWrapperFrame.y = 80

  titleWrapperFrame.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.BLUE_500,
    },
  ]

  const titleFrame = figma.createFrame()
  titleFrame.resize(655, 83)
  titleFrame.itemSpacing = 20
  titleFrame.name = 'BDD 텍스트 프레임'
  titleFrame.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.BLUE_500,
      opacity: 0,
    },
  ]
  titleFrame.x = 0
  titleFrame.y = 20

  const titleText = figma.createText()
  titleFrame.resize(655, 50)
  titleText.fontName = { family: 'Roboto', style: 'Regular' }
  titleText.characters = payload.postData.title || '개발 테스트 텍스트'
  titleText.fontSize = 36
  titleText.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.WHITE,
    },
  ]

  titleFrame.layoutMode = 'HORIZONTAL'
  titleFrame.layoutSizingHorizontal = 'FIXED'
  titleFrame.horizontalPadding = 50

  titleFrame.appendChild(titleText)
  titleFrame.appendChild(generateBadge('개발'))
  titleWrapperFrame.appendChild(generateLink(payload))
  titleWrapperFrame.appendChild(titleFrame)
  return titleWrapperFrame
}

export default generateTitleWrapper
