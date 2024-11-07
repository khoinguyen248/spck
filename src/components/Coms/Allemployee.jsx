import React, { useState } from 'react'
import './Allemployee.css'
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";

import { IoIosAddCircleOutline } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { useContext } from 'react';
import { StoreContext } from '../../store';
const Allemployee = () => {

  const store = useContext(StoreContext)
  const { listWorkers } = store

  useState(() => {
    console.log(listWorkers)
  }, [])

  return (
    <div className='cha'>
      <div className='con'>
        <div className='header'>
          <div className='header-1'>
            <p style={{


              fontSize: '20px',
              fontWeight: '600',
              lineHeight: '30px',
              textAlign: 'left'

            }}>All employees</p>
            <p style={{

              fontSize: '14px',
              fontWeight: '300',
              lineHeight: '22px',
              textAlign: 'left',
              color: 'rgba(162, 161, 168, 1)'

            }}>All employees information</p>
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
              position: 'relative', height: '50px'
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
              }}><CiSearch size={24} /></label>
            </div>

            <div className='searchbar2'
              style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button style={{

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
            <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)" }} />

            {!listWorkers && <p>please wait</p>}

            {listWorkers.map(item => {
              return (<><div className='boxcontent-1'>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                  width: '252px',
                  height: '30px'

                }}>
                  <img src={item.img} alt="" style={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '50%'
                  }} />
                  <p >{item.name}</p>

                </div>

                <p style={{
                  width: '132px',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  height: '30px'
                }}>{item.emnums}</p>
                <p style={{
                  width: '172px',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  height: '30px'
                }}>{item.department}</p>
                <p style={{
                  width: '170px',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  height: '30px'
                }}>{item.designation}</p>
                <p style={{
                  width: '112px',

                  display: 'flex',
                  alignItems: 'center',
                  height: '30px'
                }}>{item.type}</p>
                <div style={{
                  borderRadius:'10px', display: 'flex',
                  alignItems: 'center', height: '30px', backgroundColor:'rgba(113, 82, 243, 0.1)', width:'70px', justifyContent:'center'
                }}>
                  <p style={{color:'rgba(113, 82, 243, 1)', fontSize:'10px'}}>{item.status}</p>
                </div>

              </div>
                <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)" }} />
              </>
              )
            })}

            <div style={{display:'flex', width:'100%', justifyContent:'center', height:'50px', alignItems:'center'}}
            >
               

               <p style={{color:'rgba(162, 161, 168, 1)'}}>Showing 1 to 12 out of 60 records</p>

            </div>
          </div>

        </div>




      </div>
    </div>
  )
}

export default Allemployee