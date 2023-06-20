// function that adds delay

export const counter = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      // sleep for 2 secs
      return state + 1;
    default:
      return state;
  }
};

export const userReducer = (state = { name: "Alice" }) => {
  return state;
};
