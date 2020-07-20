import deepFreeze from 'deep-freeze';
import anecdoteReducer from './anecdoteReducer';
import {
  asObject,
  asObjectWithoutId,
  anecdotesAtStart,
} from './anecdoteReducer';

describe('Anecdotes reducer', () => {
  const initialStateWithoutId = anecdotesAtStart.map(asObjectWithoutId);
  const initialState = anecdotesAtStart.map(asObject);

  test('should return initial state if called with undefined state', () => {
    const action = {
      type: 'NOTHING',
    };

    deepFreeze(initialStateWithoutId);

    const newState = anecdoteReducer(undefined, action);
    expect(
      newState.map((anecdote) => {
        return {
          content: anecdote.content,
          votes: anecdote.votes,
        };
      }),
    ).toEqual(initialStateWithoutId);
  });

  test(' Should increment vote count if a vote action is dispatched ', () => {
    const initialAnecdote = initialState[0];
    const action = {
      type: 'VOTEUP',
      data: {
        id: initialAnecdote.id,
      },
    };

    deepFreeze(initialState);
    const newState = anecdoteReducer(initialState, action);

    expect(newState[0]).toEqual({
      ...initialAnecdote,
      votes: 1,
    });
  });

  test(' Should create a new anecdote with content submitted to it. ', () => {
    const action = {
      type: 'NEW_ANECDOTE',
      data: {
        content: 'New anecdote through testing.',
      },
    };

    deepFreeze(initialState);
    const newState = anecdoteReducer(initialState, action);

    expect(newState).toHaveLength(initialState.length + 1);

    const newAnecdoteInState = newState.find(
      (anecdote) => anecdote.content === action.data.content,
    );
    expect(newAnecdoteInState).toBeDefined();
  });
});
