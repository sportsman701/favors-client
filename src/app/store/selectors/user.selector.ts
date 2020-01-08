import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app-state.interface';

export const selectUser = (state: AppState) => state.user;
export const userSelector = createSelector(
  selectUser,
  (state: any) => state
);
