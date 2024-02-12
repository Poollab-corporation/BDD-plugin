import { FIGMA_COLORS } from '../constants/colors'

figma.showUI(__html__, { width: 1000, height: 700, title: 'Stead BDD' })

figma.ui.onmessage = async (payload: any) => {
  console.log('createBdd', payload)
  if (payload.type === 'createBdd') {
    const frameSize = 1295
    const frame = figma.createFrame()
    frame.resizeWithoutConstraints(frameSize, frameSize)

    frame.x = figma.viewport.center.x - frameSize
    frame.y = figma.viewport.center.y - frameSize
    frame.verticalPadding = 80
    frame.horizontalPadding = 80

    const rectangle = figma.createRectangle()
    frame.appendChild(rectangle)
    rectangle.resize(1135, 83)
    rectangle.x = 80
    rectangle.y = 80

    rectangle.fills = [
      {
        type: 'SOLID',
        color: FIGMA_COLORS.BLUE_500,
      },
    ]
  }

  figma.closePlugin()
}
