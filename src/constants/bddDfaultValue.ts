export const scenarioDefaultValue = {
  scenario_title: '',
  tasks: [
    {
      type: 'main',
      given: '',
      when: '',
      then: '',
    },
  ],
}

export const bddDefaultValue = {
  title: '',
  authority: '',
  url: '',
  scenarios: [scenarioDefaultValue],
}
