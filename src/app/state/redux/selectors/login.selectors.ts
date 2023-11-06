import { createSelector } from '@ngrx/store';

export const selectLoginData = (state: any) => state.login;

export const selectLoginDataArray = createSelector(
  selectLoginData,
  (login) => login
);
