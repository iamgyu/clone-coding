import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    const [name, setName] = useState('Hide on bush');

    return(
        <div>
            <Header setName={setName}/>
            <Main name={name}/>
            <Footer />
        </div>
    )
}

export default App;