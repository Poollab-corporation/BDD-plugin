import { FIGMA_COLORS } from '../../constants/colors'

const generateScenarioTitle = (
  taskName: string,
  taskIndex: number,
  taskData: any
) => {
  const taskWrapper = figma.createFrame()
  taskWrapper.resize(1135, 40)
  taskWrapper.name = `${taskName} 영역 프레임`
  taskWrapper.x = 80
  taskWrapper.y = 240 + taskIndex
  taskWrapper.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.BLUE_500,
      opacity: 0,
    },
  ]

  const taskTextWrapper = figma.createFrame()
  taskTextWrapper.name = `${taskName} 프레임`
  taskTextWrapper.resize(1135, 40)
  taskTextWrapper.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.BLUE_500,
    },
  ]

  const taskText = figma.createText()
  taskText.fontName = { family: 'Roboto', style: 'Regular' }
  taskText.characters = taskData.text
  taskText.fontSize = 24
  taskText.x = 10
  taskText.y = 6.5
  taskText.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.GRAY,
    },
  ]

  taskTextWrapper.appendChild(taskText)
  taskWrapper.appendChild(taskTextWrapper)

  return taskWrapper
}
export default generateScenarioTitle
