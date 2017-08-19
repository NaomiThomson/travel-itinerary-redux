export var nameReducer = ((state = "world", action) => {
  switch(action.type) {
    case "SET_NAME":
      return action.currentName;
    default:
      return state;
  }
})