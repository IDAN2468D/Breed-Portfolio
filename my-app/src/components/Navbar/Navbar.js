import React, { useState } from 'react';
import { Container, Nav, Hamburger, Menu, LinkWrapper, MenuLink, Button } from '../Navbar/NavbarStyle';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <Nav>
            <Container>
                <LogoIcon />
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <LinkWrapper>
                        <MenuLink to="/">Search</MenuLink>
                        <MenuLink to="/login">LogIn</MenuLink>
                        <Button to="/register">join now</Button>
                    </LinkWrapper>
                </Menu>
            </Container>
        </Nav>
    )
}

export default Navbar
