const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export { increase, decrease, counterReducer };
