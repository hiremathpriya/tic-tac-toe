import React from 'react'
import { shallow } from 'enzyme'

import Square from '.'

describe('components:Square', () => {
  it('renders the Square with the proper styles for player o in the top left square', () => {
    expect(
      toJson(shallow(<Square player='o' index={0} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the square with the proper styles for player X in the top left square', () => {
    expect(
      toJson(shallow(<Square palyer='x' index={0} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the Square with the proper styles for player X in the top right square', () => {
    expect(
      toJson(shallow(<Square player='x' index={2} />).dive())
    ).toMatchSnapshot()
  })

  it('renders the square with the proper styles for player x in the bottom left square', () => {
    expect(toJson(shallow(<Square player='x' index={6} />).dive()))
  })

  it('renders the square with the proper styles for player x in the bottom right square', () => {
    expect(toJson(shallow(<Square player='x' index={8} />).dive()))
  })
})