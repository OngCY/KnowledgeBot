const initialState = {
    item: {} ,
    loading:true
  };
  
  
 const reportListReducer=function(state = initialState, action) {
    switch (action.type) {
      case "SETLOADING":
        console.log("abc")
        return {
          ...state,
          loading: action.payload,
        };
      
      case "GETREPORTBYID":
        return {
          ...state,
          item: action.payload,
        };
      default:
        return state;
    }
  };
  export default reportListReducer