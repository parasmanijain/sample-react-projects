import { useReducer, type FC } from 'react';

// Definition of the action type for the reducer
type Action =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'REMOVE_TODO'; payload: number };

// Interface definition for the todo state
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// Interface definition for the global state
interface State {
    todos: Todo[];
}

// Reducing function to handle actions and update state
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.payload,
                        completed: false,
                    },
                ],
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

// Example component using the State Reducer Pattern
export const StateReducer: FC = () => {
    // Use the useReducer hook to manage state with the defined reducer
    const [state, dispatch] = useReducer(reducer, { todos: [] });

    // Functions to handle user interactions
    const addTodo = (text: string) => {
        dispatch({ type: 'ADD_TODO', payload: text });
    };

    const toggleTodo = (id: number) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    const removeTodo = (id: number) => {
        dispatch({ type: 'REMOVE_TODO', payload: id });
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {state.todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add todo..."
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
                        addTodo(e.currentTarget.value.trim());
                        e.currentTarget.value = '';
                    }
                }}
            />
        </div>
    );
};