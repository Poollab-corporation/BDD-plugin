import { FIGMA_COLORS } from '../../constants/colors'

const generateBadge = (badgeName: string) => {
  const badgeWrapper = figma.createComponent()
  badgeWrapper.resize(45, 40)
  badgeWrapper.name = '배지 프레임'
  badgeWrapper.cornerRadius = 8
  badgeWrapper.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.WHITE,
    },
  ]
  const badgeText = figma.createText()
  badgeText.fontName = { family: 'Roboto', style: 'Regular' }
  badgeText.characters = badgeName
  badgeText.fontSize = 16
  badgeText.x = 8
  badgeText.y = 8
  badgeText.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.BLACK,
    },
  ]
  badgeWrapper.appendChild(badgeText)
  return badgeWrapper
}

export default generateBadge
