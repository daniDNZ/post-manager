import offcanvasReducer, {
  IOffcanvasState,
  OffcanvasKind,
  changeForm,
  enableOffcanvas,
  disableOffcanvas,
} from './offcanvasSlice';

describe('offcanvas reducer', () => {
  const initialState: IOffcanvasState = {
    value: OffcanvasKind.FILTER_FORM,
    active: false,
  };
  it('should handle initial state', () => {
    expect(offcanvasReducer(undefined, { type: 'unknown' })).toEqual({
      value: OffcanvasKind.FILTER_FORM,
      active: false,
    });
  });

  it('should handle changeForm', () => {
    const actual = offcanvasReducer(initialState, changeForm(OffcanvasKind.EDIT_FORM));
    expect(actual.value).toEqual(OffcanvasKind.EDIT_FORM);
  });

  it('should handle enable', () => {
    const actual = offcanvasReducer(initialState, enableOffcanvas());
    expect(actual.active).toBe(true);
  });

  it('should handle disable', () => {
    const actual = offcanvasReducer(initialState, disableOffcanvas());
    expect(actual.active).toBe(false);
  });
});
