import React from 'react'
import { useContext } from 'react';
import { StoreContext } from '../../../store'; 
import { useNavigate } from 'react-router-dom';
import './PersonalInf'
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


import { IoIosAddCircleOutline } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
const PersonalInf = () => {

    const store = useContext(StoreContext)
    const {person} = store 
    
  return (
   
    <>
    
    <div className='cha'>
      <div className='con'>
        <div className='header'>
          <div className='header-1'>
            <p style={{


              fontSize: '20px',
              fontWeight: '600',
              lineHeight: '30px',
              textAlign: 'left'

            }}>{person.name}</p>
          
          </div>

          <div className='header-2' style={{
            position: 'relative',
            height: '50px',

            display: 'flex',
            gap: '12px'
          }}>
            <input type="text" style={{
              border: '1px solid rgba(162, 161, 168, 0.1)',
              paddingLeft: '40px',
              height: '50px'
            }} />
            <label htmlFor="" style={{
              position: 'absolute',
              top: '50%',
              left: '20px',
              transform: 'translateY(-50%)'
            }}><CiSearch size={24} />
            </label>
            <button style={{
              borderRadius: '10px',
              backgroundColor: 'rgba(162, 161, 168, 0.1)'

            }}><CiBellOn size={24} /></button>
          </div>
        </div>

        <div className='inforbox'>
          <div className="searchbar" style={{

            marginTop: '20px'
          }}>
            <div className="searchbar1" style={{
              width:'324px', height:'100px', display:'flex', gap:'20px'
            }}>
                <img src={person.img} style={{
                    height:'100%',
                    width:'90px',
                    borderRadius:'10px'
                }} />
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <p style={{
                         fontSize: '24px',
                         fontWeight: '600',
                         lineHeight: '36px',
                    }}>{person.name}</p>
                    <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                        <FaBriefcase/>
                        <p style={{
                            color:'rgba(22, 21, 28, 1)',
                            fontSize: '16px',
                         fontWeight: '300',
                         lineHeight: '24px',
                        }}>{person.designation}</p></div>
                        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                        <CiMail/>
                        <p style={{
                            color:'rgba(22, 21, 28, 1)',
                            fontSize: '16px',
                         fontWeight: '300',
                         lineHeight: '24px',
                        }}>{person.email}</p></div>
                    
                </div>
               

            </div>

            <div className='searchbar2'
              style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button
                onClick={() => {
                  navigate("/Homepage/Allemployee/addemployee")
                }}
                style={{

                  width: '250px',
                  height: '50px',
                  paddingLeft: '20px',
                  borderRadius: '10px',

                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(113, 82, 243, 1)',
                  color: 'white'


                }}
              ><IoIosAddCircleOutline /> <span>Add New Employees</span></button>
              <button style={{

                width: '100px',
                height: '50px',
                paddingLeft: '20px',
                borderRadius: '10px',

                fontSize: '16px',
                fontWeight: '300',
                lineHeight: '24px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: ' white',
                color: 'black',
                border: '1px solid rgba(162, 161, 168, 0.1)',


              }}><VscSettings /> Filter</button>
            </div>


          </div>

          <div className="boxcontent">
            <div className='boxcontent-1 ' style={{

              fontSize: '16px',
              fontWeight: '300',
              lineHeight: '24px',
              color: 'rgba(162, 161, 168, 1)'

            }} >
              <p style={{
                width: '252px',
                textAlign: 'left'
              }}>Employee Name</p>
              <p style={{
                width: '132px',
                textAlign: 'left'
              }}>Employee ID</p>
              <p style={{
                width: '172px',
                textAlign: 'left'
              }}>Department</p>
              <p style={{
                width: '170px',
                textAlign: 'left'
              }}>Designation</p>
              <p style={{
                width: '112px',
                textAlign: 'left'
              }}>Type</p>
              <p style={{
                width: '110px',
                textAlign: 'left'
              }}>Status</p>
              <p>Action</p>
            </div>
           
          </div>

        </div>




      </div>
    </div>


    </>
  )
}

export default PersonalInf