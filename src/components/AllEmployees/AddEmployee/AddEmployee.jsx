
import { useState } from 'react';
import './AddEmployee.css'
import { FaUser } from "react-icons/fa6";
import { SlBriefcase } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoAccessibilityOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import React, { useRef } from 'react';

const AddEmployee = () => {
    const [nowList, setnowList] = useState(1)
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.click();
    };
    return (
        <>

        <div className='cha'>
        <div className="addEmployee">
                <div className="topList">
                    {nowList == 1 ? < div onClick={() => { setnowList(1) }} className="topDetailOn">
                        <FaUser />
                        <p>Personal Information</p>
                    </div>
                        :
                        <div onClick={() => { setnowList(1) }} className="topDetailOff">
                            <FaUser />
                            <p>Personal Information</p>
                        </div>
                    }
                    {nowList == 2 ? < div onClick={() => { setnowList(2) }} className="topDetailOn">
                        <SlBriefcase />
                        <p>Professional Information</p>
                    </div>
                        :
                        <div onClick={() => { setnowList(2) }} className="topDetailOff">
                            <SlBriefcase />
                            <p>Professional Information</p>
                        </div>
                    }
                    {nowList == 3 ? < div onClick={() => { setnowList(3) }} className="topDetailOn">
                        <IoDocumentTextOutline />

                        <p>Documents</p>
                    </div>
                        :
                        <div onClick={() => { setnowList(3) }} className="topDetailOff">
                            <IoDocumentTextOutline />

                            <p>Documents</p>
                        </div>
                    }
                    {nowList == 4 ? < div onClick={() => { setnowList(4) }} className="topDetailOn">
                        <IoAccessibilityOutline />

                        <p>Account Access</p>
                    </div>
                        :
                        <div onClick={() => { setnowList(4) }} className="topDetailOff">
                            <IoAccessibilityOutline />
                            <p>Account Access</p>
                        </div>
                    }
                </div>
                {nowList == 1 && <>
                    <div className="content">
                        <div style={{ display: 'flex' }}>
                            <div onClick={focusInput} className="addPhoto">
                                <IoCameraOutline size={25} />
                            </div>
                            <input style={{ display: 'none' }} ref={inputRef} type="file" />
                        </div>
                        <form className="input2">
                            <input placeholder='First Name' className="firstName"></input>
                            <input placeholder='Last Name' className="lastName"></input>
                            <input placeholder='Mobile Number' className="mobileNumber"></input>
                            <input placeholder='Email Address' className="emailAddress"></input>
                            <input placeholder='Date of Birth' className="dateOfBirth"></input>
                            <input placeholder='Marital Status' className="maritalStatus"></input>
                            <input placeholder='Gender' className="gender"></input>
                            <input placeholder='Nationality' className="Nationality"></input>
                        </form>
                        <form className="input1">
                            <input placeholder='Address' className="address" />
                        </form>
                        <form className="input3">
                            <input placeholder='City' className='city'></input>
                            <input placeholder='State' className="state"></input>
                            <input placeholder='Zip Code' className='zipCode'></input>
                        </form>
                    </div>
                    <div className="buttom">
                        <button className="cancel">Cancel</button>
                        <button onClick={() => { setnowList(nowList + 1) }} className="next">Next</button>
                    </div>
                </>
                }
                {nowList == 2 && <>
                    <div className="content">
                        <form className="input2">
                            <input placeholder='Employee ID' className="employeeID"></input>
                            <input placeholder='User Name' className="userName"></input>
                            <input placeholder='Employee Type' className="employeeType"></input>
                            <input placeholder='Email Address' className="emailAddressCompany"></input>
                            <input placeholder='Department' className="dapartment"></input>
                            <input placeholder='Enter Designation' className="enterDesighnation"></input>
                            <input placeholder='Working Days' className="workingDays"></input>
                            <input placeholder='Joining Date' className="joiningDate"></input>
                        </form>
                        <form className="input1">
                            <input placeholder='Office Location' className="officeLocation" />
                        </form>
                    </div>
                    <div className="buttom">
                        <button className="cancel">Cancel</button>
                        <button onClick={() => { setnowList(nowList + 1) }} className="next">Next</button>
                    </div>
                </>
                }
                {nowList == 3 && <>
                    <div className="buttom">
                        <button className="cancel">Cancel</button>
                        <button onClick={() => { setnowList(nowList + 1) }} className="next">Next</button>
                    </div>
                </>
                }
                {nowList == 4 && <>
                    <div className="content">
                        <form className="input2">
                            <input placeholder='Enter Email Address' className="firstName"></input>
                            <input placeholder='Enter Stack ID' className="lastName"></input>
                            <input placeholder='Enter Skype ID' className="mobileNumber"></input>
                            <input placeholder='Enter Github ID' className="emailAddress"></input>
                        </form>

                    </div>
                    <div className="buttom">
                        <button className="cancel">Cancel</button>
                        <button className="add">Add</button>
                    </div>
                </>
                }

            </div >
        </div>
            
        </>
    )
}
export default AddEmployee
