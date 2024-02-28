const generateScenarioWrapper = (scenarioIndex: number) => {
  const scenarioWrapper = figma.createFrame()
  scenarioWrapper.name = `시나리오 ${scenarioIndex + 1} 프레임`
  scenarioWrapper.clipsContent = false
  scenarioWrapper.resize(1135, 400)
  return scenarioWrapper
}

export default generateScenarioWrapper
