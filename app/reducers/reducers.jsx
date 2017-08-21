export var nameReducer = ((state = "world", action) => {
  switch(action.type) {
    case "SET_NAME":
      return action.currentName;
    default:
      return state;
  }
});

export var locationReducer = ((state = "usa", action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return action.currentLocation;
    default:
      return state;
  }
})