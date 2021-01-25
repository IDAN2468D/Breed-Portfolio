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
                        <MenuLink href="/">Search</MenuLink>
                        <MenuLink href="/login">LogIn</MenuLink>
                        <Button href="/register">join now</Button>
                    </LinkWrapper>
                </Menu>
            </Container>
        </Nav>
    )
}

export default Navbar
