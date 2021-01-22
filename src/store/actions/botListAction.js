import axios from "axios";

export const CREATEBOT = 'CREATEBOT';
export const DELETEBOT = 'DELETEBOT';
export const GETBOT = 'GETBOT';



export function createBot()
{
    return {
        type: CREATEBOT
    }
}

export function getBot() {
  const request = axios.get("https://run.mocky.io/v3/1ffb8edd-fe5e-4a4d-9455-a02920ebc5b5");
  return dispatch =>
    request.then(response =>
      dispatch({
        type: GETBOT,
        payload: response.data
      })
    )
      .catch(error => {

      });
}



