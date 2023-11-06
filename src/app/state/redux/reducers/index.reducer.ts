
import { ActionReducerMap } from '@ngrx/store';
import { loginReducer } from './login.reducer';  // Ajuste o caminho conforme necessário

export interface AppState {
  login: any | null;
}

export const rootReducer: ActionReducerMap<AppState> = {
  login: loginReducer
};
