import axios from "axios";

export const CREATEBOT = 'CREATEBOT';
export const DELETEBOT = 'DELETEBOT';
export const GETBOTLIST = 'GETBOTLIST';
export const GETBOTBYID = "GETBOTBYID"
export const SETLOADING='SETLOADING'

export function createBot()
{
    return {
        type: CREATEBOT
    }
}
export const getBotList = () => async dispatch => {
    
  try{
      const res = await axios.get("https://seminar-cj-acceptable-economies.trycloudflare.com/bot/retrieveAll")
      dispatch( {
          type: GETBOTLIST,
          payload: res.data
      })
  }
  catch(e){
    console.log(e)
      dispatch( {
          type: SETLOADING,
          payload: false,
      })
  }

}

export const getBotByID = (id) => async dispatch => {
  try{
      const res = await axios.get("https://seminar-cj-acceptable-economies.trycloudflare.com/bot/retrieveById/"+id)
   
      dispatch( {
          type: GETBOTBYID,
          payload: res.data
      })
  }
  catch(e){
    console.log(e)
      dispatch( {
          type: SETLOADING,
          payload: false,
      })
  }

}


export function setLoading(setting)
{
    return {
        type: SETLOADING,
        payload:setting
    }
}




