import axios from "axios";
import * as CONSTANTS from '../../global';


export function createBot()
{
    return {
        type: CONSTANTS.CREATEBOT
    }
}

export const getBotList = () => async dispatch => {
    
  try{
      const res = await axios.get(CONSTANTS.GLOBAL_URL + "/bot/retrieveAll")
      dispatch( {
          type: CONSTANTS.GETBOTLIST,
          payload: res.data
      })
  }
  catch(e){
    console.log(e)
      dispatch( {
          type: CONSTANTS.SETLOADING,
          payload: false,
      })
  }

}

export const getBotByID = (id) => async dispatch => {
  try{
      const res = await axios.get(CONSTANTS.GLOBAL_URL + "/bot/retrieveById/" + id)
   
      dispatch( {
          type: CONSTANTS.GETBOTBYID,
          payload: res.data
      })
  }
  catch(e){
    console.log(e)
      dispatch( {
          type: CONSTANTS.SETLOADING,
          payload: false,
      })
  }

}

export function setLoading(setting)
{
    return {
        type: CONSTANTS.SETLOADING,
        payload:setting
    }
}




