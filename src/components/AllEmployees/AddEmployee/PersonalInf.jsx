import React, { useState } from 'react'
import { useContext } from 'react';
import { StoreContext } from '../../../store';
import { useNavigate } from 'react-router-dom';
import './PersonalInf'
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";


import { IoIosAddCircleOutline } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
const PersonalInf = () => {

  const store = useContext(StoreContext)
  const { person } = store
  const [bigcolor, setBigcolor] = useState("Profile")
  const [smallcolor, setSmallcolor] = useState("Personal Information")
  const [minimain, setMinimain] = useState("Personal Information")
  const profile = ["Personal Information", "Professional Information", "Documents", "Account"]
  const [menu, setMenu] = useState("Profile")

  const bigtoogle = ["Profile", "Attendance", "Project", "Leave"]

  const toogleParts = (char) => {
    setMenu(char)
    setBigcolor(char)
  }

  const toogleParts2 = (charr) => {
    setMinimain(charr)
    setSmallcolor(charr)
  }

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
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
              marginBottom: '20px',
            }}>
              <div className="searchbar1" style={{
                width: '324px', height: '100px', display: 'flex', gap: '20px'
              }}>
                <img src={person.img} style={{
                  height: '100%',
                  width: '90px',
                  borderRadius: '10px'
                }} />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <p style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '36px',
                  }}>{person.name}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaBriefcase />
                    <p style={{
                      color: 'rgba(22, 21, 28, 1)',
                      fontSize: '16px',
                      fontWeight: '300',
                      lineHeight: '24px',
                    }}>{person.designation}</p></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CiMail />
                    <p style={{
                      color: 'rgba(22, 21, 28, 1)',
                      fontSize: '16px',
                      fontWeight: '300',
                      lineHeight: '24px',
                    }}>{person.email}</p></div>

                </div>


              </div>


              <button
                onClick={() => {
                  navigate("/Homepage/Allemployee/addemployee")
                }}
                style={{

                  width: '150px',
                  height: '50px',
                  paddingLeft: '20px',
                  borderRadius: '10px',
                  alignSelf: 'flex-end',
                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(113, 82, 243, 1)',
                  color: 'white'


                }}
              ><FaPencil />
                <span>Edit profile</span></button>




            </div>

            <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)", width: '97%', margin: 'auto' }} />

            <div style={{ display: 'flex', width: '97%', margin: 'auto', justifyContent: 'space-between' }}>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '20%',
                marginTop: '20px',
                borderRadius:'10px',
                overflowX: 'hidden', /* Ngăn tràn theo chiều ngang */
overflowY: 'hidden',
border:'1px solid rgba(162, 161, 168, 0.2)', marginBottom:'20px'

              }}>

                {bigtoogle.map(item => {
                  return <><button style={bigcolor === item ? { display:'flex', alignItems:'center', backgroundColor:'rgba(113, 82, 243, 1)', color:'white', width:"100%" } : { display:'flex', alignItems:'center', width:"100%" }} onClick={() => {
                    toogleParts(item)

                  }}>{item}</button></>
                })}
              </div>

              {menu === "Profile" && <>

                <div style={{
                  width: '78%',
                  display: 'flex',
                  flexDirection: 'column',

                }}>

                  <div style={{
                    width: '100%',
                    display: 'flex',
                    height: '35%',
                    marginTop: '20px'
                  }}>
                    {profile.map(item => {
                      return <button onClick={() => {
                        toogleParts2(item)
                      }} style={smallcolor === item ? {display:'flex', alignItems:'center', justifyContent:'center', borderBottom:'2px solid rgba(113, 82, 243, 1)', color:'rgba(113, 82, 243, 1)' } : { justifyContent:'center',display:'flex', alignItems:'center' }}>{item}</button>
                    })}


                  </div>

                  {
                    minimain === "Personal Information" &&
                    <>
                      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' ,marginTop: '20px'}}>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>First Name</p>
                            <p>{person.firstname}</p>
                          </div>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Last Name</p>
                            <p>{person.lastname}</p>

                          </div>
                        </div>
                        <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)", width: '97%', margin: 'auto' }} />


                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>
                          <div style={{ textAlign: 'left', width: '45%', }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Mobile Number</p>
                            <p>{person.mobilenumber}</p>
                          </div>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Last Name</p>
                            <p>{person.email}</p>

                          </div>
                        </div>

                        <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)", width: '97%', margin: 'auto' }} />
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>
                          <div style={{ textAlign: 'left', width: '45%', }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Date of Birth</p>
                            <p>{person.DOB}</p>
                          </div>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Martial Status</p>
                            <p>{person.marriedstatus}</p>

                          </div>
                        </div >

                        <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)", width: '97%', margin: 'auto' }} />
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>
                          <div style={{ textAlign: 'left', width: '45%', }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Gender</p>
                            <p>{person.gender}</p>
                          </div>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Nationality</p>
                            <p>{person.state}</p>

                          </div>
                        </div >

                        <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)", width: '97%', margin: 'auto' }} />
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>
                          <div style={{ textAlign: 'left', width: '45%', }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Address</p>
                            <p>{person.address}</p>
                          </div>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>City</p>
                            <p>{person.city}</p>

                          </div>
                        </div >
                        <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)", width: '97%', margin: 'auto' }} />
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>
                          <div style={{ textAlign: 'left', width: '45%', }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>State</p>
                            <p>{person.state}</p>
                          </div>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Zipcode</p>
                            <p>{person.zipcode}</p>

                          </div>
                        </div >
                      </div>




                    </>
                  }

                  {
                    minimain === "Professional Information" && <>
                      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '20px' }}>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Employee ID</p>
                            <p>{person.emnums}</p>
                          </div>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>User Name</p>
                            <p>{person.lastname} _ {person.firstname}</p>

                          </div>
                        </div>
                        <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)", width: '97%', margin: 'auto' }} />


                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>
                          <div style={{ textAlign: 'left', width: '45%', }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Employee Type</p>
                            <p>{person.type}</p>
                          </div>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Email Address</p>
                            <p>{person.email}</p>

                          </div>
                        </div>

                        <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)", width: '97%', margin: 'auto' }} />
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>
                          <div style={{ textAlign: 'left', width: '45%', }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Department</p>
                            <p>{person.department}</p>
                          </div>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Designation</p>
                            <p>{person.designation}</p>

                          </div>
                        </div >

                        <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)", width: '97%', margin: 'auto' }} />




                      </div>


                    </>
                  }

                  {
                    minimain === "Account" &&
                    <>
                      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '20px' }}>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Email</p>
                            <p>{person.email}</p>
                          </div>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Stock Id</p>
                            <p>{person.lastname}_{person.firstname}</p>

                          </div>
                        </div>
                        <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)", width: '97%', margin: 'auto' }} />


                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>
                          <div style={{ textAlign: 'left', width: '45%', }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>Skype Id</p>
                            <p>{person.firstname}_{person.lastname}</p>
                          </div>
                          <div style={{ textAlign: 'left', width: '45%' }}>
                            <p style={{
                              fontSize: '14px',
                              fontWeight: '300px',
                              lineHeight: '22px',
                              color: 'rgba(162, 161, 168, 1)'
                            }}>X Id</p>
                            <p>{person.firstname}_{person.lastname}</p>

                          </div>
                        </div>

                        <hr style={{ border: "1px solid rgba(162, 161, 168, 0.1)", width: '97%', margin: 'auto' }} />




                      </div>
                    </>
                  }
                </div>

              </>}
              { }
              { }
              { }

            </div>

          </div>




        </div>
      </div>


    </>
  )
}

export default PersonalInf