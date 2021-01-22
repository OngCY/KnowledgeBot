const initialState = {
    createBotModalDisplay: false,
  };
  
const modalReducer= function(state = initialState, action) {
  
    switch (action.type) {
      case "CLOSE_CREATE_BOT_MODAL":
        return {
          ...state,
          createBotModalDisplay:false
        };
      case "SHOW_CREATE_BOT_MODAL":
        return {
          ...state,
          createBotModalDisplay:true
        };
      default:
        return state;
    }
  };
  
export default modalReducer;
