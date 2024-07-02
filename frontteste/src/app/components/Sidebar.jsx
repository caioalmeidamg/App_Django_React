import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import style from "../css/Sidebar.module.css" 
 
 
const Sidebar = (props) => {    
  const [sidebar, setSidebar] = useState(100);  

  const showSidebar = () => {
    setSidebar((prevSidebar) => (prevSidebar === 0 ? 100 : 0));
  };

  const closeSidebar = () => {
    setSidebar(100);
  };

  const sideBarStyle = {
    left: `${sidebar}%`,
  };

  return (
    <div className={(style.tudo)}>        
      <div placeholder="label" className={style.nav}>
        <div to="#" className= {style.navIcon}>
          <FaIcons.FaBars onClick={showSidebar} style={{zIndex: 1000, }}/>
        </div>            
        <div className={style.centeredContainer}>
          <h1 className={(style.apresenta)}> Supermercado </h1> 
        </div>           
      </div>

      <div className={style.sideBarNav} style={sideBarStyle} >
        <div style={{width: "100%"}}>  
        </div>
      </div>
      
    </ div>
  );
};
  
export default Sidebar;