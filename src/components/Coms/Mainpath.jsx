import React, { useEffect, useContext } from 'react'

import { StoreContext } from '../../store';
import { useParams } from 'react-router-dom';
import Allemployee from './allemployee';
import Alldepartment from './Alldepartment';




export const Mainpath = () => {
    const store = useContext(StoreContext)
    const { setCurrentPage } = store;

    const {userId} = useParams()

    useEffect(() => {
        setCurrentPage(userId);
    }, [userId])
    
  return (
    <>
    {userId === "1" &&  <Allemployee />}
    {userId === "2" &&  <Alldepartment />}
  
   
   </>
    
   


   
  )
}
