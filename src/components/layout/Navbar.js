import React, {  } from 'react'
import PropTypes from 'prop-types';
import {  Link } from 'react-router-dom';
import { Navbar,  Nav,NavDropdown, Form,FormControl,Button } from 'react-bootstrap';


const Navbar_ = ({icon,title}) => {

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="link1">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="link2">Action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="link3">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    
}
Navbar_.defaultProps = {
    title: 'Slideshow',
    icon: ''
}

Navbar_.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar_
