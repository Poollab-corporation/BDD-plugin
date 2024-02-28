import { FIGMA_COLORS } from '../../constants/colors'
const fontName = { family: 'Roboto', style: 'Regular' }

const generateFigmaFrame = async () => {
  await figma.loadFontAsync(fontName)
  const frameSize = {
    width: 1295,
    height: 721,
  }
  const frame = figma.createFrame()
  frame.name = 'BDD Creator Frame'
  frame.clipsContent = false
  frame.resizeWithoutConstraints(frameSize.width, frameSize.height)

  frame.x = figma.viewport.center.x - frameSize.width
  frame.y = figma.viewport.center.y - frameSize.height
  frame.verticalPadding = 80
  frame.horizontalPadding = 80
  frame.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.WHITE,
      opacity: 0,
    },
  ]
  return frame
}
export default generateFigmaFrame
