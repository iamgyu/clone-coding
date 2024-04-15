import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetTodo({todos, setTodos}) {

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get('http://127.0.0.1:5000/todos');
                setTodos(res.data);
            }catch(error) {
                console.log(error);
            }
        }
        getData();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post('http://127.0.0.1:5000/todos', {content: newTodo});
            setTodos(prevTodos =>
                [...prevTodos, res.data]);
        } catch(error) {
            console.log(error);
        }

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

    const checkClick = async () => {
        try {
            const res = await axios.patch('http://127.0.0.1:5000/todos/' + todo.id, {status: !todo.status});
            setTodos(prevTodos => 
                prevTodos.map(todo => {
                    if(todo.id === res.data.id) {
                        return res.data;
                    }
                    return todo;
                })
            );
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <input type='checkbox' defaultChecked={todo.status} onChange={checkClick}/>
    )
}

function DeleteTodo({todo, setTodos}) {

    const buttonClick = async () => {
        try {
            await axios.delete('http://127.0.0.1:5000/todos/' + todo.id);
            setTodos(prevTodos =>
                prevTodos.filter(t => t.id !== todo.id));
        } catch(error) {
            console.log(error);
        }
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