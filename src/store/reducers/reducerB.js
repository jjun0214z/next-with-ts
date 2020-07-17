function reducer(state, action) {
  switch (action.type) {
    case "TEST_ACTION_B":
      return {
        data: 10,
      };
    default:
      return state;
  }
}

export default reducer;
