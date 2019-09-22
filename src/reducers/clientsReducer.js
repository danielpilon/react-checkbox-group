export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CLIENTS":
      return action.payload.map(client => {
        return { id: client.id, name: client.name, checked: false };
      });
    default:
      return state;
  }
};
