const initialState = {
    createBotModalDisplay: false,
    displayReportModal: false,
    displayEntityModal: false
};
  
const modalReducer= function(state = initialState, action) {
    switch (action.type) {
      case "CLOSE_CREATE_BOT_MODAL":
        return {
          ...state,
          createBotModalDisplay: false
        }
      case "SHOW_CREATE_BOT_MODAL":
        return {
          ...state,
          createBotModalDisplay: true
        }
      case "CLOSE_DISPLAYREPORT_MODAL":
        return {
            ...state,
            displayReportModal: false
        }
      case "SHOW_DISPLAYREPORT_MODAL":
        return {
            ...state,
            displayReportModal: true
        }
      case "CLOSE_DISPLAYENTITY_MODAL":
        return {
          ...state,
          displayEntityModal: false
        }
      case "SHOW_DISPLAYENTITY_MODAL":
        return {
          ...state,
          displayEntityModal: true
        }
      default:
        return state;
    }
  };
  
export default modalReducer;