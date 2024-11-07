import React, { useEffect, useContext } from 'react'

import { StoreContext } from '../../store';
import { Outlet, useParams } from 'react-router-dom';
import Allemployee from './allemployee';

import AllDepartments from '../AllDepartments/AllDepartments';




export const Mainpath = () => {
  const store = useContext(StoreContext)
  const { setCurrentPage } = store;
  const { setListWorkers } = store;
  const { userId } = useParams()



  useEffect(() => {
    setCurrentPage(userId);

  }, [userId])


  const { employeeId } = useParams()

  return (
    <>

      {!employeeId && <> {userId === "Allemployee" && <Allemployee />}
        {userId === "AllDepartments" && <AllDepartments />}</>}


      <Outlet />
    </>
  )
}
