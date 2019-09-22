export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CLIENTS":
      return action.payload.map(client => {
        return { id: client.id, name: client.name, checked: false };
      });
    case "TOGGLE_CHECKED":
      return updateObjectInArray(
        state,
        action.payload,
        (previousClient, nextClient) => {
          return previousClient.id === nextClient.id;
        }
      );
    default:
      return state;
  }
};

const updateObjectInArray = (array, nextItem, comparator) => {
  console.log(array);
  return array.map(item => {
    if (comparator(item, nextItem)) {
      return {
        ...item,
        ...nextItem
      };
    }

    return item;
  });
};
