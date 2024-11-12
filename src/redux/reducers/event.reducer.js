const eventReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return action.payload;
    case 'DELETE_ITEM':
      return state.filter(event => event.id !== action.payload); // Ensure payload is an ID
    default:
      return state;
  }
};

export default eventReducer;
