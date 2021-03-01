import axios from "axios";
import * as CONSTANTS from '../../global';

export const GETENTITYBYNAME = 'GETENTITYBYNAME';
export const SETLOADING='SETLOADING';

export function getEntityByName(name) {
  const request = axios.get(CONSTANTS.GLOBAL_URL + "/entity/retrieveByEntityName/" + name);
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
