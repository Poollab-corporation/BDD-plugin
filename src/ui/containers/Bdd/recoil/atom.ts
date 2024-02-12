import { atom } from 'recoil'

interface Variable {
  variable: string
}

interface WhenListAtomList {
  task: string
  variables: Variable[]
}

export const whenListAtom = atom<WhenListAtomList[]>({
  key: 'whenList',
  default: [
    {
      task: '',
      variables: [
        {
          variable: '',
        },
      ],
    },
  ]
})
