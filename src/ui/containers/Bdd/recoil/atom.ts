import { atom } from 'recoil'

interface Variable {
  variable: string
  result: string
}

interface WhenListAtomList {
  task: string
  taskResult: string
  variables: Variable[]
}

export const whenListAtom = atom<WhenListAtomList[]>({
  key: 'whenList',
  default: [
    {
      task: '',
      taskResult: '',
      variables: [
        {
          variable: '',
          result: '',
        },
      ],
    },
  ],
})
