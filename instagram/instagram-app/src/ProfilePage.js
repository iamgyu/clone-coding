import React from "react";
import MenuBar from "./MenuBar";
import Profile from "./Profile";

function ProfilePage() {
    return(
        <div style={{backgroundColor: "black"}}>
            <MenuBar />
            <Profile />
        </div>
    )
}

export default ProfilePage;