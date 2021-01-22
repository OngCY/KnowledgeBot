const initialState = {
    item: {},
    loading: true
  };
  
 const entityReducer=function(state = initialState, action) {
    switch (action.type) {
      case "SETLOADING":
        return {
          ...state,
          loading: action.payload,
        }
      
      case "GETENTITYBYNAME":
        return {
          ...state,
          item: action.payload,
        }

      default:
        return state;
    }
  };

  export default entityReducer;