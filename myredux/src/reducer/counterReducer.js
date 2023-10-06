
const initialState = 5;
const ChangeCounter = (stat1 = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return stat1 + 1;
    case "DECREMENT":
      return stat1 - 1;
    default:
      return stat1;
  }
};
export default ChangeCounter;
