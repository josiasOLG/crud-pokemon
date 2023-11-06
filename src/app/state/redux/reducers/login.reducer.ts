import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from '../actions/login.action';

export const initialState: any | null = null;

const _loginReducer = createReducer(
  initialState,
  on(LoginActions.setLoginData, (state, loginData: any ) => loginData)
);

export function loginReducer(state: any | null = initialState, action: Action): any | null {
  return _loginReducer(state, action);
}
