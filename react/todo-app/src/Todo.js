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
                        <label>{todo.content}{' ' + todo.status}</label>
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

function Todo() {
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <GetTodo todos={todos} setTodos={setTodos}/>
            <PostTodo setTodos={setTodos}/>
        </div>
    )
}

/*
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
        this.setState(prevState => ({
            todos: [...prevState.todos, newTodo]
        }))
    }

    deleteTodo(id) {
        axios.delete('http://127.0.0.1:5000/todos/' + id)
        .then(res => {
            console.log(res);
            console.log(res.data);

            const deleteTodos = this.state.todos.filter(todo => todo.id !== id);
            this.setState({todos: deleteTodos});
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
                        <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
                    </div>
                )}
                <AddTodo onAdd={this.handleAddTodo}/>
                <GetTodo />
            </div>
        );
    }
}
*/
export default Todo;