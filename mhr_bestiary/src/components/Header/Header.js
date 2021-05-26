import React from "react";
import Button from '../Button/Button';
import {Link} from "react-router-dom";

function Header() {

  return (
  
    <nav className="navbar main-header" style={{padding: 10, backgroundColor: "darkslategray", color: "white"}}>
        <ul className="nav">
            <Link to='/menu' className={window.location.pathname === '/menu'}>
                <Button>Monster Menu</Button>
             </Link>
        </ul>
</nav>

  );
}

export default Header;