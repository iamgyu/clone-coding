import React from "react";
import MenuBar from "./MenuBar";
import Main from "./Main";

function MainPage() {
    return(
        <div style={{backgroundColor: "black"}}>
            <MenuBar/>
            <Main />
        </div>
    )
}

export default MainPage;