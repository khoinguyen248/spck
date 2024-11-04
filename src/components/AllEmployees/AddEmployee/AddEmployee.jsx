
import { useState } from 'react';
import './AddEmployee.css'
import { FaUser } from "react-icons/fa6";
const AddEmployee = () => {
    const [nowList, setnowList] = useState(1)

    return (
        <>
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
                        <FaUser />
                        <p>Professional Information</p>
                    </div>
                        :
                        <div onClick={() => { setnowList(2) }} className="topDetailOff">
                            <FaUser />
                            <p>Professional Information</p>
                        </div>
                    }
                    {nowList == 3 ? < div onClick={() => { setnowList(3) }} className="topDetailOn">
                        <FaUser />
                        <p>Documents</p>
                    </div>
                        :
                        <div onClick={() => { setnowList(3) }} className="topDetailOff">
                            <FaUser />
                            <p>Documents</p>
                        </div>
                    }
                    {nowList == 4 ? < div onClick={() => { setnowList(4) }} className="topDetailOn">
                        <FaUser />
                        <p>Account Access</p>
                    </div>
                        :
                        <div onClick={() => { setnowList(4) }} className="topDetailOff">
                            <FaUser />
                            <p>Account Access</p>
                        </div>
                    }
                </div>
                <div className="content">
                    <div className="addPhoto">
                        <FaUser />
                    </div>
                    <form className="input2">
                        <input className="firstName"></input>
                        <input className="lastName"></input>
                        <input className="mobileNumber"></input>
                        <input className="emailAddress"></input>
                        <input className="dateOfBirth"></input>
                        <input className="maritalStatus"></input>
                        <input className="gender"></input>
                        <input className="Nationality"></input>
                    </form>
                    <form className="input1">
                        <input type="text" className="address" />
                    </form>
                    <form className="input3">
                        <input className='city'></input>
                        <input className="state"></input>
                        <input className='zipCode'></input>
                    </form>
                </div>
                <div className="buttom">
                    <button className="cancel">Cancel</button>
                    <button className="next">Next</button>
                </div>
            </div >
        </>
    )
}
export default AddEmployee
