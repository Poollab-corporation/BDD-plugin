import generateTask from './functions/generateTask'
import generateImageFrame from './functions/generateImageFrame'
import generateTitleWrapper from './functions/generateTitleWrapper'
import generateFigmaFrame from './functions/generateFigmaFrame'
import generateScenarioTitle from './functions/generateScenarioTitle'

figma.showUI(__html__, {
  width: parseInt(String(figma.viewport.bounds.width)),
  height: 1000,
  title: 'Stead BDD Creator',
})

figma.ui.onmessage = async (payload: any) => {
  console.log(payload)
  console.log('figma', figma)
  if (payload.type === 'createBdd') {
    if (!payload) return
    const frame = await generateFigmaFrame()
    frame.appendChild(generateTitleWrapper(payload))
    frame.appendChild(generateImageFrame())
    payload.postData.scenarios.forEach((scenario, scenarioIndex) => {
      let taskIndex = 0
      for (const tasks in scenario) {
        taskIndex++
        scenario[tasks].forEach((taskData) => {
          if (tasks === 'scenario_title') {
            frame.appendChild(
              generateScenarioTitle(tasks, taskIndex - 1, taskData)
            )
          }

          if (tasks !== 'scenario_title') {
            frame.appendChild(generateTask(tasks, taskIndex - 1, taskData))
          }
        })
      }
    })
  }
  figma.closePlugin()
}
