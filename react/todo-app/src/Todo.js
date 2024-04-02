import React, { Component, useState } from 'react';
import axios from 'axios';

function AddTodo({onAdd}) {
    const [todo, setTodo] = useState(null);

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:5000/todos', {content: todo})
        .then(res => {
            console.log(res);
            console.log(res.data);
            onAdd(res.data);
        })

        setTodo('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type='text' placeholder='Add a new todo...' onChange={handleChange}/>
                </label>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };

        this.checkClick = this.checkClick.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/todos')
        .then(res => {
            const todos = res.data;
            this.setState({ todos });
        })
    }
    
    checkClick(id) {
        const updateTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                axios.patch('http://127.0.0.1:5000/todos/' + id, {status: !todo.status})
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                
                return {...todo, status: !todo.status};
            }
            return todo;
        })
        this.setState({todos: updateTodos});
    }

    handleAddTodo(newTodo) {
        const prevTodos = this.state.todos;
        this.setState({
            todos: [...prevTodos, newTodo]
        })
    }

    render() {
        return (
            <div>
                <h2>TODOs</h2>
                {this.state.todos.map(todo => 
                    <div key={todo.id}>
                        <input type='checkbox' defaultChecked={todo.status} onChange={() => this.checkClick(todo.id)}/>
                        <label>{todo.content}{' ' + String(todo.status)}</label>
                    </div>
                )}
                <AddTodo onAdd={this.handleAddTodo}/>
            </div>
        );
    }
}

export default Todo;