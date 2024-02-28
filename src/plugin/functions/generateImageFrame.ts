import { FIGMA_COLORS } from '../../constants/colors'

const generateImageFrame = () => {
  const imageFrame = figma.createFrame()
  imageFrame.resize(300, 400)
  imageFrame.x = 80
  imageFrame.y = 300
  imageFrame.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.GRAY,
    },
  ]
  return imageFrame
}
export default generateImageFrame
