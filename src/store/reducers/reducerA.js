function reducer(state, action) {
  switch (action.type) {
    case "TEST_ACTION_A":
      return {
        data: 5,
      };
    default:
      return state;
  }
}

export default reducer;
