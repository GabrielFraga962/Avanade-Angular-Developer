import { createAction, props } from "@ngrx/store";

export const changeText = createAction (
  '[Home] Chance Text',
  props<{ text: string }>(),
);