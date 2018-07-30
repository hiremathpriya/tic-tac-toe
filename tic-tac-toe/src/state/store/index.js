// src/state/store/index.js

import { createStore } from 'redux'

import { rootReducer } from '..'

export default function configureStore () {
  return createStore(rootReducer)
}
