import axios from "axios";

export const GETENTITYBYNAME = 'GETENTITYBYNAME';
export const SETLOADING='SETLOADING';

export function getEntityByName(name) {
  const request = axios.get("https://seminar-cj-acceptable-economies.trycloudflare.com/entity/retrieveByEntityName/"+name);
  setLoading(true);
  return dispatch =>
    request.then(response =>
      dispatch({
        type: GETENTITYBYNAME,
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
