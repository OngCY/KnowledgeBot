const initialState = {
    items: [],
    botDetails:null,
    loading:true
  };
  
  
 const botListReducer=function(state = initialState, action) {
    switch (action.type) {
      case "SETLOADING":
        return {
          ...state,
          loading: action.payload,
        };
      case "GETBOTBYID":
        console.log(action.payload)
          return {
            ...state,
            botDetails: action.payload,
          };
      case "GETBOTLIST":
        console.log("sbc")
        return {
          ...state,
          items: action.payload,
        };
      default:
        return state;
    }
  };
  export default botListReducer