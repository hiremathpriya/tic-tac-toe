import React from 'react'
import styled from 'styled-components'
import { isUndefined } from 'ramda-adjunct'

const StyledSquare = styled.div`
  border-color: hsla(0, o%, o%, 0.2);
  border-style: solid;
  border-width: 0 ${({ index }) => (index % 3 === 2 ? 0 : '2px')}
    ${({ index }) => (index < 6 ? '2px' : 0)} 0;
  color: ${({ player }) =>
    player === 'x' ? 'hsl(46, 95%, 59%)' : 'hsl(0, 0%, 0%)'};
    cursor: ${({ onClick }) => (isUndefined(onClick) ? 'default' : 'pointer')}
  font-size: 16vh;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`

StyledSquare.displayName = 'StyledSquare'

export default function Square ({ handleClick, index, player }) {
  return isUndefined(player) ? (
    <StyledSquare index={index} onClick={handleClick} />
  ) : (
    <StyledSquare index={index} player={player}>
      {player}
    </StyledSquare>
  )
}
