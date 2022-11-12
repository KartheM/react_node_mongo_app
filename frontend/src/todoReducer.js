import axios from 'axios';

const initialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
      status: 'All',
      colors: []
    }
  }
export default function todosReducer(state = initialState, action) {
        switch (action.type) {
            // Do something here based on the different types of actions
            default:
              // If this reducer doesn't recognize the action type, or doesn't
              // care about this specific action, return the existing state unchanged
              return state
          
    }
  }
  export async function fetchTodos(dispatch, getState) {
    const response = await axios.post(`http://localhost:4001/users`,{})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    dispatch({ type: 'todos/todosLoaded', payload: response })
  }