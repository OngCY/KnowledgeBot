import axios from "axios";

export const CREATEBOT = 'CREATEBOT';
export const DELETEBOT = 'DELETEBOT';
export const GETBOT = 'GETBOT';
export const SETLOADING='SETLOADING'


export function createBot()
{
    return {
        type: CREATEBOT
    }
}

export function getBot() {
  const request = axios.get("https://cs-stolen-canal-angela.trycloudflare.com/bot/retrieveAll");
  setLoading(true);
  return dispatch =>
    request.then(response =>
      dispatch({
        type: GETBOT,
        payload: response.data,
      })
    
    )
      .catch(error => {

      });
}

export function setLoading(setting)
{
    return {
        type: SETLOADING,
        payload:setting
    }
}




