import React, { Component } from 'react';
import axios from 'axios';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };

        this.checkClick = this.checkClick.bind(this);
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
                return {...todo, status: !todo.status};
            }
            return todo;
        })
        this.setState({todos: updateTodos});
    }

    render() {

        return (
            this.state.todos.map(todo => 
                  <div key={todo.id}>
                    <input type='checkbox' defaultChecked={todo.status} onChange={() => this.checkClick(todo.id)}/>
                    <label>{todo.content}{' ' + String(todo.status)}</label>
                  </div>
            )
        );
    }
}

export default Todo;