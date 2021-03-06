import { indexOf } from 'ramda'

export default function getplayer (square, moves = []) {
  const move = indexOf(square, moves)

  if (move < 0) {
    return undefined
  }
  return move % 2 === 0 ? 'x' : 'o'
}
