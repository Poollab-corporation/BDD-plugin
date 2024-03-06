import generateTask from './functions/generateTask'
import generateImageFrame from './functions/generateImageFrame'
import generateTitleWrapper from './functions/generateTitleWrapper'
import generateFigmaFrame from './functions/generateFigmaFrame'
import generateScenarioTitle from './functions/generateScenarioTitle'
import generateScenarioWrapper from './functions/generateScenarioWrapper'

figma.showUI(__html__, {
  // width: parseInt(String(figma.viewport.bounds.width)),
  width: 1000,
  height: 800,
  title: 'Stead BDD Creator',
})

figma.ui.onmessage = async (payload: any) => {
  if (payload.type !== 'createBdd') return
  if (!payload) return

  const frame = await generateFigmaFrame()
  frame.appendChild(generateTitleWrapper(payload))
  frame.appendChild(generateImageFrame())

  payload.postData.scenarios.forEach((scenario, scenarioIndex) => {
    let taskIndex = 0
    for (const tasks in scenario) {
      taskIndex++
      const scenarioWrapper = generateScenarioWrapper(scenarioIndex)
      scenario[tasks].forEach((taskData) => {
        if (tasks === 'scenario_title') {
          scenarioWrapper.appendChild(
            generateScenarioTitle({
              scenarioIndex,
              taskName: tasks,
              taskIndex: taskIndex - 1,
              taskData,
            })
          )
        }
        if (tasks !== 'scenario_title') {
          scenarioWrapper.appendChild(
            generateTask({
              scenarioIndex,
              taskName: tasks,
              taskIndex: taskIndex - 1,
              taskData,
            })
          )
        }

        frame.appendChild(scenarioWrapper)
      })
    }
  })
  figma.closePlugin()
}
