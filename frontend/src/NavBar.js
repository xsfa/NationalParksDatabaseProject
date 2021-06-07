import React, {Component, CollapsibleNav} from 'react'
import ReactBootstrap, {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './NavBar.css'


const handleSelect=(eventKey) => {
    console.log("User selected ", eventKey)
};

const handleSearch=(eventKey) => {
    console.log("User sent ", eventKey)
};


const NavBar = () => {
    var eventKey;
    return(        
        <>
            <Navbar variant="dark" bg="dark">
                <Nav onSelect = {handleSelect} className="table_select">
                    <Navbar.Brand > Select an attribute.. </Navbar.Brand>
                    <NavDropdown title="Parks" id="park_dropdowna">
                        <NavDropdown.Item eventKey="parks_name_chosen">Name</NavDropdown.Item>
                        <NavDropdown.Item eventKey="parks_state_chosen">State</NavDropdown.Item>
                        <NavDropdown.Item eventKey="parks_latitude_chosen">Latitude</NavDropdown.Item>
                        <NavDropdown.Item eventKey="parks_longitude_chosen">Longitude</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Animals" id="animal_dd">
                        <NavDropdown.Item   >Park Name</NavDropdown.Item>
                        <NavDropdown.Item   >Species Name</NavDropdown.Item>
                        <NavDropdown.Item   >Population</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Flora" id="flora_dd">
                        <NavDropdown.Item   >Park Name</NavDropdown.Item>
                        <NavDropdown.Item   >Species Name</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Campgrounds" id="cg_dd">
                        <NavDropdown.Item   >Campground Name</NavDropdown.Item>
                        <NavDropdown.Item   >Max Occupancy</NavDropdown.Item>
                        <NavDropdown.Item   >Latitude</NavDropdown.Item>
                        <NavDropdown.Item   >Longitude</NavDropdown.Item>
                        <NavDropdown.Item   >Park Name</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Attractions" id="attraction_dd">
                        <NavDropdown.Item   >Attraction Name</NavDropdown.Item>
                        <NavDropdown.Item   >Type</NavDropdown.Item>
                        <NavDropdown.Item   >Latitude</NavDropdown.Item>
                        <NavDropdown.Item   >Longitude</NavDropdown.Item>
                        <NavDropdown.Item   >Park Name</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Hiking Trails" id="ht_dd">
                        <NavDropdown.Item   >Trail Name</NavDropdown.Item>
                        <NavDropdown.Item   >Trail Difficulty</NavDropdown.Item>
                        <NavDropdown.Item   >Length in Miles</NavDropdown.Item>
                        <NavDropdown.Item   >Latitude</NavDropdown.Item>
                        <NavDropdown.Item   >Longitude</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Visitors" id="visitor_dd">
                        <NavDropdown.Item   >Park Name</NavDropdown.Item>
                        <NavDropdown.Item   >First Name</NavDropdown.Item>
                        <NavDropdown.Item   >Last Name</NavDropdown.Item>
                        <NavDropdown.Item   >Annual Pass Holder</NavDropdown.Item>
                        <NavDropdown.Item   >Gender</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Staff" id="staff_dd">
                        <NavDropdown.Item   >SSN</NavDropdown.Item>
                        <NavDropdown.Item   >Name</NavDropdown.Item>
                        <NavDropdown.Item   >Overseeing Area</NavDropdown.Item>
                        <NavDropdown.Item   >Office ID</NavDropdown.Item>
                        <NavDropdown.Item   >Park Name</NavDropdown.Item>
                        <NavDropdown.Item   >Park ID</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>

            <div>
            </div>

            <Form inline onSubmit={handleSearch}>
                <FormControl type="text" placeholder="Search. . ." className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                
            </Form>

            <Form.Group controlId="count_checkbox">
                <Form.Check type="checkbox" label="Result Count" />
            </Form.Group>

        </>
    )

}

export default NavBar