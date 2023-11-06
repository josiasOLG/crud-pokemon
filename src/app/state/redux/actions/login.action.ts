import { createAction, props } from '@ngrx/store';

export const setLoginData = createAction(
  '[Login Component] Set Login Data',
  props<{ loginData: any}>()
);
