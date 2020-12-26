import thunk, { ThunkAction } from 'redux-thunk'
import { applyMiddleware, createStore, Action } from 'redux'
import reducer from './reducers'

type RootReducerType = typeof reducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

export default createStore(reducer, applyMiddleware(thunk))
