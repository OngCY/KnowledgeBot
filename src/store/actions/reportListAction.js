import axios from "axios";

export const GETREPORTBYID = 'GETREPORTBYID';
export const SETLOADING='SETLOADING';

export function getreportByID(id) {
  const request = axios.get("https://seminar-cj-acceptable-economies.trycloudflare.com/report/retrieveById/"+id);
  setLoading(true);
  return dispatch =>
    request.then(response =>
      dispatch({
        type: GETREPORTBYID,
        payload: response.data,
      })
    )
    .catch(error => {
        console.log("Error retrieving report");
    });
}

export function setLoading(setting)
{
    return {
        type: SETLOADING,
        payload:setting
    }
}
