import axios from "axios";

export const GETREPORTBYID = 'GETREPORTBYID';
export const SETLOADING='SETLOADING'

export function getreportByID() {
  const request = axios.get("https://cs-stolen-canal-angela.trycloudflare.com/report/retrieveById/1");
  setLoading(true);
  return dispatch =>
    request.then(response =>
      dispatch({
        type: GETREPORTBYID,
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




