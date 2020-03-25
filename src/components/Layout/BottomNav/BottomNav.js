import React from "react";
import './BottomNav.css';
const BottomNav = ({msg}) => {
    return ( 
        <div className="bottomNav"> 
          <h6>{msg}</h6>
        </div>
     );
}
 
export default BottomNav;