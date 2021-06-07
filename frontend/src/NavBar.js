import React from 'react'
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './NavBar.css'

var attPrint;
var count = 0;
const handleSelect=(eventKey) => {
    console.log("User selected ", eventKey)
    handleClick(eventKey)
};

const handleSearch=(eventKey) => {
    console.log("User sent ", eventKey)
};

function handleClick(){
    count++
    if (count % 2 === 0) {
        console.log("dont result count")
        return true
    } else {
        console.log("result count")
        return false
    }
}


const NavBar = () => {
    return(        
        <>
            <Navbar variant="dark" bg="dark">
                <Nav onSelect = {handleSelect} className="table_select">
                    <Navbar.Brand > Select an attribute.. </Navbar.Brand>
                    <NavDropdown title="Parks" id="park_dropdown">
                        <NavDropdown.Item eventKey="parks_name"> Name </NavDropdown.Item>
                        <NavDropdown.Item eventKey="parks_state">| State </NavDropdown.Item>
                        <NavDropdown.Item eventKey="parks_latitude">| Latitude </NavDropdown.Item>
                        <NavDropdown.Item eventKey="parks_longitude">| Longitude </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Animals" id="animal_dd">
                        <NavDropdown.Item eventKey="animals_parkname"  > Park Name </NavDropdown.Item>
                        <NavDropdown.Item eventKey="animals_species"  >| Species Name| </NavDropdown.Item>
                        <NavDropdown.Item eventKey="animals_pop"  > Population </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Flora" id="flora_dd">
                        <NavDropdown.Item eventKey="flora_parkname"  > Park Name </NavDropdown.Item>
                        <NavDropdown.Item eventKey="flora_species"  >| Species Name </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Campgrounds" id="cg_dd">
                        <NavDropdown.Item eventKey="cg_name"  > Campground Name </NavDropdown.Item>
                        <NavDropdown.Item eventKey="cg_mo"  >| Max Occupancy </NavDropdown.Item>
                        <NavDropdown.Item eventKey="cg_lat"  >| Latitude </NavDropdown.Item>
                        <NavDropdown.Item eventKey="cg_long"  >| Longitude </NavDropdown.Item>
                        <NavDropdown.Item eventKey="cg_parkname"  >| Park Name </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Attractions" id="attraction_dd">
                        <NavDropdown.Item eventKey="att_name"  > Attraction Name </NavDropdown.Item>
                        <NavDropdown.Item eventKey="att_type"  >| Type </NavDropdown.Item>
                        <NavDropdown.Item eventKey="att_lat"  >| Latitude </NavDropdown.Item>
                        <NavDropdown.Item eventKey="att_long"  >| Longitude </NavDropdown.Item>
                        <NavDropdown.Item eventKey="att_parkname"  >| Park Name </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Hiking Trails" id="ht_dd">
                        <NavDropdown.Item eventKey="ht_tn"  > Trail Name </NavDropdown.Item>
                        <NavDropdown.Item eventKey="ht_td"  >| Trail Difficulty </NavDropdown.Item>
                        <NavDropdown.Item eventKey="ht_lim"  >| Length in Miles </NavDropdown.Item>
                        <NavDropdown.Item eventKey="ht_lat"  >| Latitude </NavDropdown.Item>
                        <NavDropdown.Item eventKey="ht_long"  >| Longitude </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Visitors" id="visitor_dd">
                        <NavDropdown.Item eventKey="visitor_parkname"  > Park Name </NavDropdown.Item>
                        <NavDropdown.Item eventKey="visitor_fname"  >| First Name </NavDropdown.Item>
                        <NavDropdown.Item eventKey="visitor_lname"  >| Last Name </NavDropdown.Item>
                        <NavDropdown.Item eventKey="visitor_aph"  >| Annual Pass Holder </NavDropdown.Item>
                        <NavDropdown.Item eventKey="visitor_gender"  >| Gender</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Staff" id="staff_dd">
                        <NavDropdown.Item eventKey="staff_SSN"  > SSN </NavDropdown.Item>
                        <NavDropdown.Item eventKey="staff_name"  >| Name </NavDropdown.Item>
                        <NavDropdown.Item eventKey="staff_oa"  >| Overseeing Area </NavDropdown.Item>
                        <NavDropdown.Item eventKey="staff_oid"  >| Office ID </NavDropdown.Item>
                        <NavDropdown.Item eventKey="staff_parkname"  >| Park Name </NavDropdown.Item>
                        <NavDropdown.Item eventKey="staff_parkid"  >| Park ID </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>

            <div>
            </div>

            <Form inline>
                <FormControl type="text" onSubmit={handleSearch} placeholder="Search. . ." className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                
            </Form>

            <Form.Group controlId="count_checkbox">
                <Form.Check onChange={handleClick} type="checkbox" label="Result Count" />
            </Form.Group>

            Attribute selected: {handleSelect}
        </>
    )

}

export default NavBar