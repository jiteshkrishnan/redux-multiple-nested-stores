// function that simulates a dummy api, This waits for 1 sec and
const callApi = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 1000)
  );

// sync action object
export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

// a thunk action
export const asyncIncrement = () => async (dispatch, getState) => {
  // call Api and then do a sync dispatch
  await callApi();
  dispatch(increment());
};
