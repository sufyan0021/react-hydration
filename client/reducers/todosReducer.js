const initialTodosState = [
  { id: 1, text: 'Eat food', completed: true },
  { id: 2, text: 'Exercise', completed: false },
];

export function todosReducer(state = initialTodosState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    }
    case 'todos/todoToggled': {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    }
    case 'todos/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload);
    }
    default:
      return state;
  }
}
