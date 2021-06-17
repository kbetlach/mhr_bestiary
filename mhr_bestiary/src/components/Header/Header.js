import React from "react";
import Button from '../Button/Button';
import {Link} from "react-router-dom";

function Header() {

  return (
  
    <nav className="navbar main-header" style={{fontSize: '24px', padding: 10, backgroundColor: "darkslategray", color: "white"}}>
        <div className="nav">
            <Link to='/menu' className={window.location.pathname === '/menu'}>
                <Button style={{color: 'darkslategrey'}}>Monster Menu</Button>
             </Link>
             <p style={{float: 'right', fontFamily: 'VTCGoblinHand'}}>Monster Hunter Bestiary</p>
        </div>
    </nav>

  );
}

export default Header;