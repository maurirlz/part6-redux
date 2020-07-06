import deepFreeze from "deep-freeze";
import counterReducer from "./reducer";

describe("unicafe reducer", () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  };

  test("should return a proper initial state when called with undefined state", () => {
    const action = {
      type: "DO_NOTHING",
    };

    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test("good is incremented", () => {
    const action = {
      type: "GOOD",
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    });
  });

  test("ok is incremented", () => {
    const action = {
      type: "OK",
    };

    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);

    expect(newState).toEqual({
      ...initialState,
      ok: 1,
    });
  });

  test("bad is incremented", () => {
    const action = {
      type: "BAD",
    };

    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);

    expect(newState).toEqual({
      ...initialState,
      bad: 1,
    });
  });

  test("if action is zero, counters are reset", () => {
    const modifiedState = {
      ...initialState,
      good: 5,
    };

    const action = {
      type: "ZERO",
    };

    deepFreeze(modifiedState);
    const newState = counterReducer(modifiedState, action);

    expect(newState).toEqual(initialState);
  });
});
