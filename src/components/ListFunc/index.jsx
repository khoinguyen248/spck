import React, { useEffect, useState } from 'react';
import './button.css';
import logo from './logo2.png';
import { RxDashboard } from "react-icons/rx";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { CiDollar } from "react-icons/ci";
import { RxBackpack } from "react-icons/rx";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";

import { Outlet, useNavigate, useParams } from 'react-router-dom';

export const Button = () => {
    const [checkbut, setCheckbut] = useState(null);
    const [toogle, setToogle] = useState(false)

   
   const navigate = useNavigate()
    const handleCheckbut = (int) => {
        setCheckbut(int);
        navigate(`/Homepage/${int}`)
    };

    
    
    return (
        <>
         <div style={{
                width: '100vw',
                display: 'flex',
                justifyContent: 'space-between'

            }}>


<div className="parent">
                    <div className='menu'>
                        <div style={{
                            display: "flex",
                            alignItems: 'center',
                            width: '90%',
                            gap: '10px',
                            marginBottom: '30px'
                        }}>
                            <img src={logo} alt="" style={{ width: "40px", height: "40px" }} />
                            <p style={{ fontFamily: 'lexend', fontSize: '24px' }}>HRSM</p>
                        </div>
                        <button className={checkbut === 1 ? 'selected' : ''} onClick={() => handleCheckbut(1)}><RxDashboard />Dashboard</button>
                        <button className={checkbut === 2 ? 'selected' : ''} onClick={() => handleCheckbut(2)}><BsPersonLinesFill />All employees</button>
                        <button className={checkbut === 3 ? 'selected' : ''} onClick={() => handleCheckbut(3)}><MdOutlineLocalFireDepartment />All departments</button>
                        <button className={checkbut === 4 ? 'selected' : ''} onClick={() => handleCheckbut(4)}><GrSchedules />Attendance</button>
                        <button className={checkbut === 5 ? 'selected' : ''} onClick={() => handleCheckbut(5)}><CiDollar />Payroll</button>
                        <button className={checkbut === 6 ? 'selected' : ''} onClick={() => handleCheckbut(6)}><RxBackpack />Jobs</button>
                        <button className={checkbut === 7 ? 'selected' : ''} onClick={() => handleCheckbut(7)}><IoPersonAddOutline />Candidates</button>
                        <button className={checkbut === 8 ? 'selected' : ''} onClick={() => handleCheckbut(8)}><MdEventNote />Leaves</button>
                        <button className={checkbut === 9 ? 'selected' : ''} onClick={() => handleCheckbut(9)}><LuCalendarDays />Holidays</button>
                        <button className={checkbut === 0 ? 'selected' : ''} onClick={() => handleCheckbut(0)}><IoSettingsOutline />Setting</button>
                    </div>

                </div>
              
                <Outlet />
            </div>
            

               


               
            





        </>
    );
};
