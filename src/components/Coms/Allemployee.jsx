import React from 'react'
import './Allemployee.css'
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";

import { IoIosAddCircleOutline } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
const Allemployee = () => {
  return (
    <div className='cha'>
        <div className='con'>
      <div className='header'>
       <div className='header-1'>
           <p>All employees</p>
           <p>All employees information</p>
       </div>

       <div className='header-2'>
           <input type="text" />
           <label htmlFor=""><CiSearch />
           </label>
           <button><CiBellOn /></button>
       </div>
      </div>

      <div className='inforbox'>
       <div className="searchbar">
           <div className="searchbar1">
           <input type="text" />
           <label htmlFor=""><CiSearch /></label>
           </div>
          
           <div className='searchbar2'>
               <button><IoIosAddCircleOutline /> Add New Employees</button>
               <button><VscSettings /> Filter</button>
           </div>

           
       </div>

       <div className="boxcontent">
           <div className='boxcontent-1'>
               <p>Employee Name</p>
               <p>Employee ID</p>
               <p>Department</p>
               <p>Designation</p>
               <p>Type</p>
               <p>Status</p>
               <p>Action</p>
           </div>
           
       </div>
       <hr style={{ border: "1px solid black" }}/>
      </div>
      

      

   </div>
   </div>
  )
}

export default Allemployee