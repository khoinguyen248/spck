import React, { useEffect, useContext } from 'react'

import { StoreContext } from '../../store';
import { useParams } from 'react-router-dom';
import Allemployee from './allemployee';
import Alldepartment from './Alldepartment';




export const Mainpath = () => {
    const store = useContext(StoreContext)
    const { setCurrentPage } = store;
    const { setListWorkers } = store;
    const {userId} = useParams()

    const fetchOne = async () =>{


      try{
        const respone = await fetch('https://671c5ff22c842d92c382ba18.mockapi.io/mindxpro')
        const data = await respone.json()
       setListWorkers(data)
        
      }

      catch{

      }
       
    }

    useEffect(() => {
        setCurrentPage(userId);
       
    }, [userId])

   if(userId == "Allemployees"){
      fetchOne()
      
   }
    
  return (
    <>
    {userId === "Allemployees" &&  <Allemployee />}
    {userId === "Alldepartments" &&  <Alldepartment />}
  
   
   </>
    
   


   
  )
}
