import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'
import { Board, Square } from '..'

// below we are writing the function to make squares and using times funtion from ramda//

const makeSquares = () =>
  times(
    idx => <Square key={idx} index={idx} player={idx % 2 === 0 ? 'x' : 'o'} />,
    9
  )

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vh;
`

StyledApp.displayName = 'StyledApp'

export default function APP () {
  return (
    <StyledApp>
      <Board>{makeSquares()}</Board>
    </StyledApp>
  )
}
