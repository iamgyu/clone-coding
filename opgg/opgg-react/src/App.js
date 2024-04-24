import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    const [player, setPlayer] = useState({
        name:"Hide on bush", 
        point: 568, 
        win: 87, 
        lose: 60
    });

    return(
        <div>
            <Header setPlayer={setPlayer}/>
            <Main player={player}/>
            <Footer />
        </div>
    )
}

export default App;