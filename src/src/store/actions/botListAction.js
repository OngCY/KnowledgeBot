export const CREATEBOT = 'CREATEBOT';
export const DELETEBOT = 'DELETEBOT';
export const GETBOT = 'GETBOT';

export function createBot()
{
    return {
        type: CREATEBOT
    }
}

export function getBot(params) {
  // const request = axios.get('/api/entities-app/entity', {params});
  const { entityId } = params;
  /* const request = axios.get(api.GET_ENTITY + entityId);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GETBOT,
        payload: response.data
      })
    )
      .catch(error => {
        dispatch(Actions.showMessage({ message: 'Unable to load the entity', variant: 'error' }));
      }); */
}



