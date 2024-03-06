export type FormValues = {
  title: string
  authority: string
  url: string
  scenarios: {
    scenario_title: string
    tasks: {
      type: string
      given: string
      when: string
      then: string
    }[]
  }[]
}
