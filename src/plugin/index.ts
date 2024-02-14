import { FIGMA_COLORS } from '../constants/colors'

const TASKS = ['GIVEN', 'WHEN', 'THEN']
const fontName = { family: 'Roboto', style: 'Regular' }

figma.showUI(__html__, {
  width: parseInt(String(figma.viewport.bounds.width)),
  height: 1000,
  title: 'Stead BDD Creator',
})

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

const generateTaskTitle = (taskName: string, taskIndex: number) => {
  const taskWrapper = figma.createFrame()
  taskWrapper.resize(246, 400)
  taskWrapper.name = `${taskName} 영역 프레임`
  taskWrapper.x = 160 + (taskIndex + 1) * 286
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
  taskText.characters = taskName
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
  return taskWrapper
}

figma.ui.onmessage = async (payload: any) => {
  console.log(payload)
  console.log('figma', figma)
  if (payload.type === 'createBdd') {
    await figma.loadFontAsync(fontName)

    const frameSize = {
      width: 1295,
      height: 721,
    }
    const frame = figma.createFrame()
    frame.name = 'BDD Creator Frame'
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
    titleFrame.name = 'BDD 텍스트 프레임'
    titleFrame.fills = [
      {
        type: 'SOLID',
        color: FIGMA_COLORS.BLUE_500,
        opacity: 0,
      },
    ]

    const titleText = figma.createText()
    titleText.fontName = { family: 'Roboto', style: 'Regular' }
    titleText.characters = payload.postData.title || '개발 테스트 텍스트'
    titleText.x = 20
    titleText.y = 20
    titleText.fontSize = 36
    titleText.fills = [
      {
        type: 'SOLID',
        color: FIGMA_COLORS.WHITE,
      },
    ]

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

    titleFrame.appendChild(titleText)
    titleFrame.appendChild(generateBadge('개발'))
    titleWrapperFrame.appendChild(linkText)
    titleWrapperFrame.appendChild(titleFrame)

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

    frame.appendChild(imageFrame)
    TASKS.forEach((task, taskIndex) =>
      frame.appendChild(generateTaskTitle(task, taskIndex))
    )
    frame.appendChild(titleWrapperFrame)
  }
  figma.closePlugin()
}
