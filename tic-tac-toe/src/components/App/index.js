import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'
import { isUndefined } from 'ramda-adjunct'
import { Board, Square } from '..'
import { getPlayer } from '../../utilities'

// below we are writing the function to make squares and using times funtion from ramda//

function makeSquares (moves) {
  return times(square => {
    const player = getPlayer(square, moves)

    return isUndefined(player) ? (
      <Square
        key={square}
        index={square}
        handleClick={() => console.log(`Square ${square}`)}
      />
    ) : (
      <Square key={square} index={square} player={player} />
    )
  }, 9)
}

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

export default function APP ({ moves = [] }) {
  return (
    <StyledApp>
      <Board>{makeSquares(moves)}</Board>
    </StyledApp>
  )
}
