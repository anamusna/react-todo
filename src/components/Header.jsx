import React from 'react';

const Header = props =>{
       return(
    <header className="header">
     <h1 style={{color: "blue"}}>My List</h1>
     <span className="tagline1">{props.tagline1}</span>
     </header>
       )
}
export default Header;