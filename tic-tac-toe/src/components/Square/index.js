import React from 'react'
import styled from 'styled-components'

const StyledSquare = styled.div`
  border-color: hsla(0, o%, o%, 0.2);
  border-style: solid;
  border-width: 0 ${props => (props.index % 3 === 2 ? 0 : '2px')}
    ${props => (props.index < 6 ? '2px' : 0)} 0;
  color: ${props =>
    props.player === 'x' ? 'hsl(46, 95%, 59%)' : 'hsl(0, 0%, 0%)'};
  font-size: 16vh;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`

StyledSquare.displayName = 'StyledSquare'

export default function Square (props) {
  return (
    <StyledSquare index={props.index} player={props.player}>
      {props.player}
    </StyledSquare>
  )
}
