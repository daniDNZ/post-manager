import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export enum OffcanvasKind {
  FILTER_FORM = 'FILTER_FORM',
  EDIT_FORM = 'EDIT_FORM',
}

export interface IOffcanvasState {
  value: OffcanvasKind;
  active: boolean;
}

const initialState: IOffcanvasState = {
  value: OffcanvasKind.FILTER_FORM,
  active: false,
};

export const offcanvasSlice = createSlice({
  name: 'offcanvas',
  initialState,
  reducers: {
    changeForm: (state, action: PayloadAction<OffcanvasKind>) => {
      state.value = action.payload;
    },
    enableOffcanvas: (state) => {
      state.active = true;
    },
    disableOffcanvas: (state) => {
      state.active = false;
    },
  },
});

export const { changeForm, enableOffcanvas, disableOffcanvas } = offcanvasSlice.actions;

export const selectOffcanvasType = (state: RootState) => state.offcanvas.value;
export const selectOffcanvasStatus = (state: RootState) => state.offcanvas.active;

export default offcanvasSlice.reducer;