import React from 'react'
import { Table } from 'react-bootstrap'
import './NavBar.css'

export default function Records({ data }) {
  const headers = data.columnNames
  const rows = data.records

  const getHeader = () => {
    return headers.map((item) => {
      return <th>{item}</th>
    })
  }

  const renderHeader = getHeader()

  const getRows = () => {
    return rows.map((row) => {
      let line = row.map((item) => {
        return <td>{item}</td>
      })
      return <tr>{line}</tr>
    })
  }

  const renderRow = getRows()

  return (
    <div className="container myTable">
      <Table striped bordered hover>
        <thead>
          <tr>{renderHeader}</tr>
        </thead>
        <tbody>{renderRow}</tbody>
      </Table>
    </div>
  )
}
