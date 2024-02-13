import { atom } from 'recoil'

interface Items {
  item: string
  subItems: string[]
}

interface WhenListAtomList {
  title: string
  items: Items[]
}

export const whenListAtom = atom<WhenListAtomList[]>({
  key: 'whenList',
  default: [
    {
      title: '',
      items: [
        {
          item: '',
          subItems: [],
        },
      ],
    },
  ],
})
