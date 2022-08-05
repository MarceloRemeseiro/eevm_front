import styled from "styled-components";
import { Link } from "react-router-dom";


export const Nav = styled.nav`
  background:#F8F9FA;
  height: 120px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-top:0;

  @media screen and (max-width: 945px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0px;
  max-width: 1200px;
`;

export const NavLogo = styled(Link)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
  text-decoration: none;
  &:hover{
    color: #2b74fd;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 945px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #8D9297;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 0px;
  padding-left: 0;
  margin-bottom: 0;
  @media screen and (max-width: 945px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color:#8D9297;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #2b74fd;
    transition: 0.2s ease-in-out;
  }
  &:active {
    border-bottom: 3px solid #2b74fd;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 945px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: #2b74fd;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    -webkit-box-shadow: 0px 0px 56px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 56px -3px rgba(0,0,0,0.75);
box-shadow: 0px 0px 56px -3px rgba(0,0,0,0.75);
    color: #010606;
  }
`;
