const initialState = [
  {
    id: 0,
    title: "todo"
  }
]

const todoReducers = (state = initialState, action ) => {
  switch(action.type){
    case "SET_TODO":
      return [
        ...state,
        {
          id: state.length+1,
          title: action.title
        }
      ]
    default:
      return state
  }
}


export default todoReducers