export type FormValues = {
  title: string
  authority: string
  url: string
  scenarios: {
    scenario_title: {
      text: string
    }[]
    given: {
      text: string
    }[]
    when: {
      text: string
      subItems?: {
        text: string
      }[]
    }[]
    then: {
      text: string
    }[]
  }[]
}
