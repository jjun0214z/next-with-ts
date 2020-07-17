function reducer(state, action) {
  switch (action.type) {
    case "TEST_ACTION_C":
      return {
        data: 15,
      };
    default:
      return state;
  }
}

export default reducer;
