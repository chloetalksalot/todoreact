import React from 'react';
import TodoItem from './TodoItem.js';

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
};

export default TodoList;