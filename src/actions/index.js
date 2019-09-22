import { CLIENTS } from "../data/clients";

export const fetchClients = () => async dispatch => {
  dispatch({ type: "FETCH_CLIENTS", payload: CLIENTS });
};

export const toggleChecked = client => async dispatch => {
  dispatch({
    type: "TOGGLE_CHECKED",
    payload: { ...client, checked: !client.checked }
  });
};
