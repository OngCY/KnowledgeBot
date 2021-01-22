const initialState = {
    items: []
  };
  
  
 const botListReducer=function(state = initialState, action) {
    switch (action.type) {
      case "GETBOT":
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
  };
  export default botListReducer