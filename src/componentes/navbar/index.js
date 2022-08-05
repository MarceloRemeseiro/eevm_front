import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar2({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img
              src="/img/logo.png"
              width="100"
              height="100"
              className="d-inline-block"
              alt=""
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">INICIO</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="actividad">ACTIVIDADES</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="media">MEDIA</NavLinks>
            </NavItem>

            <div class="dropdown">
              <Link
                to="#"
                class="dropdown-toggle text-secondary"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SOBRE NOSOTROS
              </Link>
              <ul class="dropdown-menu dropP" aria-labelledby="dropdownMenu2">
                <li>
                  <Link to="misionVision" class="dropdown-item" type="button">
                    Misión y Visión
                  </Link>
                </li>
                <li>
                  <Link to="queCreemos" class="dropdown-item" type="button">
                    Que creemos
                  </Link>
                </li>
                <li>
                  <Link to="jesus" class="dropdown-item" type="button">
                    Jesús
                  </Link>
                </li>
                <li>
                  <Link to="pastores" class="dropdown-item" type="button">
                    Pastores
                  </Link>
                </li>
              </ul>
            </div>

            <NavItem>
              <NavLinks to="dar">DONAR</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="contacto">CONTACTO</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar2;
