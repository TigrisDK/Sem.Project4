import React from 'react';

function Footer(){
    return(
        <div>{Logout()}
        </div>
        
    )
}

function Logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    window.location.href = "/Login";
}

export default Footer;