
import logo from '../assets/images/logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

import batmanaudio from '../assets/sound/batman.aac';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";


const Links = [
    { title: 'Home', path: "/" },
    { title: 'Projects', path: "/projects" },
    { title: 'Photography', path: "/photography" },
    { title: 'Algorithms', path: "/algorithms" },
    { title: 'Hobbies', path: "/hobbies" },
    { title: 'Contact', path: "/contact" },
];

export default function Header() {

    useEffect(() => {
    }, []);

    const playBatman = () => {
        let audio = new Audio(batmanaudio);
        audio.play()
    }



    return (
        <Navbar collapseOnSelect={true}
            bg='dark'
            variant="dark"
            expand="lg"
            id='navbar'
        >
            <Container>
                <Navbar.Brand onMouseEnter={(e) => playBatman()} >
                    <Image id='bandlogo' src={logo} height={36} width={100} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        {Links.map((link) => <Nav.Link>
                            <NavLink className={({ isActive }) => isActive ? "active" : ""} to={`${link.path}`}>{link.title}</NavLink>
                        </Nav.Link>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}