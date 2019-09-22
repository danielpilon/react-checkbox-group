import { CLIENTS } from "../data/clients";

export const fetchClients = () => async dispatch => {
  dispatch({ type: "FETCH_CLIENTS", payload: CLIENTS });
};
