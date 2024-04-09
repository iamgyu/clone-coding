import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetTodo({todos, setTodos}) {

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/todos')
        .then(res => {
            const data = res.data;
            setTodos(data);
        })
    }, [setTodos]);

    return (
        <div>
            <h2>TODOs</h2>
            {
                todos?.map(todo => 
                    <div key={todo.id}>
                        <PatchTodo todo={todo} setTodos={setTodos} />
                        <label>{todo.content}{' ' + todo.status}</label>
                        <DeleteTodo todo={todo} setTodos={setTodos} />
                    </div>
            )}
        </div>
    )
}

function PostTodo({setTodos}) {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:5000/todos', {content: newTodo})
        .then(res => {
            setTodos(prevTodos =>
                [...prevTodos, res.data]);
        })

        setNewTodo('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type='text' value={newTodo} placeholder='Add a new todo...' onChange={handleChange}/>
                </label>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

function PatchTodo({todo, setTodos}) {

    const checkClick = () => {
        axios.patch('http://127.0.0.1:5000/todos/' + todo.id, {status: !todo.status})
        .then(res => {
            const updateTodo = res.data;
            setTodos(prevTodos => 
                prevTodos.map(todo => {
                    if(todo.id === updateTodo.id) {
                        return updateTodo;
                    }
                    return todo;
                })
            );
        })
    }

    return (
        <input type='checkbox' defaultChecked={todo.status} onChange={checkClick}/>
    )
}

function DeleteTodo({todo, setTodos}) {

    const buttonClick = () => {
        axios.delete('http://127.0.0.1:5000/todos/' + todo.id)
        .then(res => {
            setTodos(prevTodos => 
                prevTodos.filter(t => t.id !== todo.id));
        })
    }

    return (
        <button onClick={buttonClick}>Delete</button>
    )
}

function Todo() {
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <GetTodo todos={todos} setTodos={setTodos}/>
            <PostTodo setTodos={setTodos}/>
        </div>
    )
}

export default Todo;