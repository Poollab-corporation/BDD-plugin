import TestTemplate from '../TestTemplate'
import { render } from '@testing-library/react'

const useRender = (children: JSX.Element | JSX.Element[]) => {
  return render(<TestTemplate>{children}</TestTemplate>)
}

export default useRender
