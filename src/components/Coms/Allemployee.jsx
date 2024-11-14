import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Allemployee.css'
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

import { IoIosAddCircleOutline } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { useContext } from 'react';
import { StoreContext } from '../../store';
import { useEffect } from 'react';

export const Allemployee = () => {
  const navigate = useNavigate();
  const store = useContext(StoreContext)
  const [listWorkers, setListWorkers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // const { listWorkers } = store

  const fetchOne = async () => {
    try {
      setIsLoading(true)
      const respone = await fetch('https://671c5ff22c842d92c382ba18.mockapi.io/mindxpro')
      const data = await respone.json()
      setListWorkers(data)
      setIsLoading(false)
    }
    catch {
      console.log('error')
    }

  }
  const showInfo = (name) => {
    navigate(`/Homepage/Allemployee/${name}`)
  }
  useEffect(() => {
    fetchOne()
  }, [])

  // useState(() => {
  //   console.log(listWorkers)
  // }, [])

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

            }}  >All employees information</p>
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
            <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)" }} />

            {isLoading && <p style={{margin:'auto', color:'rgba(162, 161, 168, 1)'}}>please wait</p>}

            {!isLoading && listWorkers.length > 0 && listWorkers?.map(item => {
              return (<><div key={item.id} className='boxcontent-1'>
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
               
                  <p style={{ color: 'rgba(113, 82, 243, 1)', fontSize: '10px', display:'flex', alignItems:'center', backgroundColor:'rgba(113, 82, 243, 0.1)', borderRadius:'10px', width:'70px', justifyContent:'center'}}>{item.status}</p>
               
                  <div style={{
                 
                  }}>
                <IoEyeOutline/>
                <FaRegTrashAlt/>
                <FaPenToSquare/>
              </div>


              </div>
                <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)" }} />
              </>
              )
            })}

            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', height: '50px', alignItems: 'center' }}
            >


              <p style={{ color: 'rgba(162, 161, 168, 1)' }}>Showing 1 to 12 out of 60 records</p>

              

            </div>
          </div>

        </div>




      </div>
    </div>


  )
}

