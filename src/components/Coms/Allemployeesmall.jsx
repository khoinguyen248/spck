import React from 'react'
import { useParams } from 'react-router-dom'
import AddEmployee from '../AllEmployees/AddEmployee/AddEmployee'

const Allemployeesmall = () => {

  const {employeeId}  = useParams()
  return (
    <>
    {employeeId === "addemployee" && <AddEmployee />}</>
     
  )
}

export default Allemployeesmall