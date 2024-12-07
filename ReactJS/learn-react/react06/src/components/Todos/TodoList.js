import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo, undoTodo } from '../../actions/todo';

export default function TodoList() {
    const todoList = useSelector(state => state.todo);
    const dispatch = useDispatch();
    const handleCompleted = (id) => {
        console.log(id);
        dispatch(completedTodo(id));
    }
    const handleUndo = (id) => {
        dispatch(undoTodo(id));
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }
    console.log(todoList)
    return (
        <>
            {todoList.length > 0 && (
                <div className='todo-list'>
                    {todoList.map((item) => (
                        <div className='todo-item' key={item.id}>
                            <span className={'todo_content'}
                                style={{
                                    textDecoration: item.completed ? "line-through" : "none"
                                }}>{item.content}</span>
                            {item.completed ? (<button onClick={() => handleUndo(item.id)}>U</button>) : (
                                <button onClick={() => handleCompleted(item.id)}>V</button>
                            )}
                            <button onClick={() => handleDelete(item.id)}>X</button>
                        </div>
                    ))}
                </div>
            )}

        </>
    )
}
