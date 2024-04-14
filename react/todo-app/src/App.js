import React from 'react';
import Todo from './Todo';
import LoginPage from './LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;