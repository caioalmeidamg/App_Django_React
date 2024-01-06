import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import style from "./Sidebar.module.css"
  
const Nav = styled.div`
  background: rgb(118, 81, 62);
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;
  
const NavIcon = styled(Link)`
  color: white;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
  
const SidebarNav = styled.nav`
  background: grey;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
  
const SidebarWrap = styled.div`
  width: 100%;
`;
  
const Sidebar = (props) => {
  //ele basicamente setta sidebar com false  
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <div className={(style.tudo)}>

        
          <Nav placeholder="label" className={(style.label)}>
            <NavIcon to="#" className= {(style.ok)}>
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            
            <div className={style.centeredContainer}>
              <h1 className={(style.apresenta)}> Supermercado </h1> 
            </div>
           
          </Nav>

          
        <SidebarNav sidebar={sidebar} >
          <SidebarWrap>
            <NavIcon 
              to="#" 
              className = {(style.ok)}
            >
                <AiIcons.AiOutlineClose 
                  onClick = {showSidebar}  
                />
            </NavIcon>           
          </SidebarWrap>
        </SidebarNav>
      
    </ div>
  );
};
  
export default Sidebar;