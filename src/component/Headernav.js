import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function Headernav() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
              <Link to='/' className='nav-link'>Home</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to='/agence' className='nav-link'>Agence</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to='/contact' className='nav-link'>Contact</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}