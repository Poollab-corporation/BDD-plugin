figma.showUI(__html__, { width: 1000, height: 700, title: 'Stead BDD' })

figma.ui.onmessage = async (payload: string) => {
  console.log('createBdd', payload)
  if (payload === 'createBdd') {
    const frameSize = 800
    const frame = figma.createFrame()
    frame.resizeWithoutConstraints(frameSize, frameSize)

    frame.x = figma.viewport.center.x - frameSize
    frame.y = figma.viewport.center.y - frameSize

    const rectangle = figma.createRectangle()
    frame.appendChild(rectangle)
    rectangle.resize(800, 800)
    rectangle.x = 0
    rectangle.y = 0
    rectangle.fills = [
      {
        type: 'SOLID',
        color: { r: 1, g: 1, b: 0 },
      },
    ]
  }

  figma.closePlugin()
}
