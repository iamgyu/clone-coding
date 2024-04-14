import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const movePage = useNavigate();

    function goTodo() {
        movePage('/todo');
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <div>
                <label htmlFor="id">ID : </label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="password">PASSWORD : </label>
                <input type="password" />
            </div>
            <div>
                <button onClick={goTodo}>LOGIN</button>
            </div>
        </div>
    )
}

export default LoginPage;