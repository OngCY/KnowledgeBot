const initialState = {
    items: [],
    loading:true
  };
  
  
 const botListReducer=function(state = initialState, action) {
    switch (action.type) {
      case "SETLOADING":
        console.log("abc")
        return {
          ...state,
          loading: action.payload,
        };
      
      case "GETBOT":
        return {
          ...state,
          items: action.payload,
        };
      default:
        return state;
    }
  };
  export default botListReducer