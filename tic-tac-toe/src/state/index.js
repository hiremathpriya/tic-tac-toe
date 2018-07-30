import { SQUARE_CLICKED } from './constants'
import { squareClicked } from './actions'
import { initalState, rootReducer } from './reducers'
import { getMoves } from './selectors'
import configureStore from './store'

export {
  configureStore,
  getMoves,
  initalState,
  rootReducer,
  SQUARE_CLICKED,
  squareClicked
}
