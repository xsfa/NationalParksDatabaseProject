import React, { useState, useEffect } from 'react'
import { Nav, Navbar, NavDropdown, Form } from 'react-bootstrap'
import './NavBar.css'
import Search from './Search';
import Table from T

var count = 0;
var attributeSelected = ""
var tableSelected = ""

let params = { searchBy: '', filterValue: '', count: false }

const NavBar = () => {
  const [result, setResult] = useState()
  const [table, setTable] = useState()
  const [attribute, setAttribute] = useState()

  const handleSelect = (eventkey, event) => {
    console.log(eventkey)
    console.log(event.target.name)
    attributeSelected = eventkey
    tableSelected = event.target.name
    params['searchBy'] = attributeSelected
    endpoint = `/${tableSelected}`
    console.log(endpoint)
    setTable(event.target.name)
    setAttribute(event.target.innerText)
  }

  function handleClick() {
    count++
    if (count % 2 === 0) {
      console.log('dont result count')
      params['count'] = false
    } else {
      console.log('result count')
      params['count'] = true
    }
  }

  function handleInput(event) {
    console.log(event.target.value)
    params['filterValue'] = event.target.value
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(params)
    const fetchData = async () => {
      const response = await axios.get(endpoint, { params: params })
      console.log(response.data)
      setResult(response.data)
    }
    fetchData()
  }

  // test the result has changed
  useEffect(() => {
    console.log(result)
  }, [result])

  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Nav onSelect={handleSelect} className="table_select">
          <Navbar.Brand> Select an attribute.. </Navbar.Brand>
          <NavDropdown title="Parks" id="parks">
            <NavDropdown.Item name="parks" eventKey="park_name">
              {' '}
              Name{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="parks" eventKey="state">
              | State{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="parks" eventKey="latitude">
              | Latitude{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="parks" eventKey="longitude">
              | Longitude{' '}
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Animals" id="animals">
            <NavDropdown.Item name="animals" eventKey="park_name">
              {' '}
              Park Name{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="animals" eventKey="A_species">
              | Species Name|{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="animals" eventKey="Est_pop">
              {' '}
              Population{' '}
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Flora" id="flora">
            <NavDropdown.Item name="flora" eventKey="park_name">
              {' '}
              Park Name{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="flora" eventKey="F_species">
              | Species Name{' '}
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Campgrounds" id="campgrounds">
            <NavDropdown.Item name="campgrounds" eventKey="campground_name">
              {' '}
              Campground Name{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="campgrounds" eventKey="max_occupancy">
              | Max Occupancy{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="campgrounds" eventKey="C.latitude">
              | Latitude{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="campgrounds" eventKey="C.longitude">
              | Longitude{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="campgrounds" eventKey="park_name">
              | Park Name{' '}
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Attractions" id="attractions">
            <NavDropdown.Item name="attractions" eventKey="attraction_name">
              {' '}
              Attraction Name{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="attractions" eventKey="type">
              | Type{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="attractions" eventKey="A.latitude">
              | Latitude{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="attractions" eventKey="A.longitude">
              | Longitude{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="attractions" eventKey="park_name">
              | Park Name{' '}
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Hiking Trails" id="hikingtrails">
            <NavDropdown.Item name="hikingtrails" eventKey="trail_name">
              {' '}
              Trail Name{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="hikingtrails" eventKey="difficulty">
              | Trail Difficulty{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="hikingtrails" eventKey="length">
              | Length in Miles{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="hikingtrails" eventKey="latitude">
              | Latitude{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="hikingtrails" eventKey="longitude">
              | Longitude{' '}
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Visitors" id="visitors">
            <NavDropdown.Item name="visitors" eventKey="park_name">
              {' '}
              Park Name{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="visitors" eventKey="fname">
              | First Name{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="visitors" eventKey="lname">
              | Last Name{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="visitors" eventKey="annual_pass_holder">
              | Annual Pass Holder{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="visitors" eventKey="gender">
              | Gender
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Staff" id="staff">
            <NavDropdown.Item name="staff" eventKey="ssn">
              {' '}
              SSN{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="staff" eventKey="name">
              | Name{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="staff" eventKey="Overseeing_Area_Name">
              | Overseeing Area{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="staff" eventKey="O_office_id">
              | Office ID{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="staff" eventKey="park_name">
              | Park Name{' '}
            </NavDropdown.Item>
            <NavDropdown.Item name="staff" eventKey="P_park_id">
              | Park ID{' '}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      {table && attribute && (
        <p>
          You selected {table[0].toUpperCase() + table.slice(1)} {attribute}
        </p>
      )}

      <Form.Group controlId="count_checkbox">
        <Form.Check
          onChange={handleClick}
          type="checkbox"
          label="Result Count"
        />
      </Form.Group>
      <br></br>

      <label> Search:</label>
      <input type="text" onChange={handleInput} />
      <button onClick={handleSubmit}>submit</button>
    </>
  )
}

export default NavBar
