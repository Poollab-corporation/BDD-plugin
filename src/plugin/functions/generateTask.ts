import { FIGMA_COLORS } from '../../constants/colors'
import { generateScenarioTitleProps } from '../../interfaces/scenario'

const generateTask = ({
  scenarioIndex,
  taskName,
  taskIndex,
  taskData,
}: generateScenarioTitleProps) => {
  const taskWrapper = figma.createFrame()
  taskWrapper.clipsContent = false
  taskWrapper.resize(246, 400)
  taskWrapper.name = `${taskName} 영역 프레임`
  taskWrapper.x = 160 + taskIndex * 326
  taskWrapper.y = 300
  taskWrapper.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.BLUE_500,
      opacity: 0,
    },
  ]

  const taskTextWrapper = figma.createFrame()
  taskTextWrapper.name = `${taskName} 프레임`
  taskTextWrapper.resize(246, 40)
  taskTextWrapper.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.BLUE_500,
    },
  ]

  const taskText = figma.createText()
  taskText.fontName = { family: 'Roboto', style: 'Regular' }
  taskText.characters = taskName.toUpperCase()
  taskText.fontSize = 24
  taskText.x = 10
  taskText.y = 6.5
  taskText.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.WHITE,
    },
  ]

  taskTextWrapper.appendChild(taskText)
  taskWrapper.appendChild(taskTextWrapper)

  const gwtTextWrapper = figma.createFrame()
  gwtTextWrapper.name = `${taskName} 내용 프레임`
  gwtTextWrapper.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.BLUE_200,
    },
  ]
  gwtTextWrapper.resize(246, 40)
  gwtTextWrapper.y = 62

  const gwtText = figma.createText()
  gwtText.fontName = { family: 'Roboto', style: 'Regular' }
  gwtText.characters = taskData.text
  gwtText.fontSize = 14
  gwtText.fills = [
    {
      type: 'SOLID',
      color: FIGMA_COLORS.BLACK,
    },
  ]
  gwtText.x = 10
  gwtText.y = 10

  gwtTextWrapper.appendChild(gwtText)
  taskWrapper.appendChild(gwtTextWrapper)

  if (taskData.subItems?.length > 0) {
    taskData.subItems.forEach((sub, subIndex) => {
      const gwtTextSubWrapper = figma.createFrame()
      gwtTextSubWrapper.name = `서브 내용 프레임`
      gwtTextSubWrapper.resize(246, 32)
      gwtTextSubWrapper.fills = [
        {
          type: 'SOLID',
          color: FIGMA_COLORS.BLUE_200,
        },
      ]
      gwtTextSubWrapper.x = 20
      gwtTextSubWrapper.y = (40 + 32 + 50) * (subIndex + 1)

      const gwtSubText = figma.createText()
      gwtSubText.fontName = { family: 'Roboto', style: 'Regular' }
      gwtSubText.characters = sub.text
      gwtSubText.fontSize = 14
      gwtSubText.fills = [
        {
          type: 'SOLID',
          color: FIGMA_COLORS.BLACK,
        },
      ]
      gwtSubText.x = 10
      gwtSubText.y = 10

      gwtTextSubWrapper.appendChild(gwtSubText)
      taskWrapper.appendChild(gwtTextSubWrapper)
    })
  }

  return taskWrapper
}

export default generateTask
