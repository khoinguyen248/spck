import React, { useState, useEffect } from 'react';
import './Signup.css';
import logo from './logo.png';
import dashboard from './dashboard.png';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [checkPassword, setCheckPassword] = useState(false)
    const [pass, setPass] = useState(true)
    const [report, setReport] = useState(true)

    const [mail, setMail] = useState("")
    const handleMail = (e) => {
        setMail(e.target.value)
    }

    const checkPass = () => {
        setPass(!pass)
    }

    const [password, setPassword] = useState("")
    const handlePass = (e) => {
        setPassword(e.target.value)
    }

    const handleCheckPassword = () => {
        setCheckPassword(true);
    };


    const navigate = useNavigate()


    useEffect(() => {
        if (checkPassword) {
            const savedPassword = "yourSavedPassword";

            if (password === savedPassword) {
                navigate("/Homepage/1")
            } else {
                setReport(false)
            }
            setCheckPassword(false);
        }
    }, [checkPassword, password]);
    return (
        <>
            <div className='container'>
                <div style={{
                    backgroundColor: 'rgba(113, 82, 243, 0.05)',
                    height: '100%',
                    width: '58%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <img src={dashboard} alt="" style={{ height: "80%", width: "80%" }} />
                </div>

                <div className='checkBox' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    height: '100%',
                    width: '42%',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: 'center',
                        marginBottom: '40px',
                        width: '100%',
                        gap: '10px'
                    }}>
                        <img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
                        <h1 style={{ fontFamily: 'lexend' }}>HRMS</h1>
                    </div>

                    <p style={{
                        marginBottom: '8px',
                        fontFamily: 'Lexend',
                        fontSize: '30px',
                        fontWeight: '600',
                        lineHeight: '40px'
                    }}>Welcome</p>
                    <p style={{
                        marginBottom: '30px',
                        fontFamily: 'lexend',
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: '300px',
                        color: 'rgba(162, 161, 168, 1)'
                    }}>Please login here</p>


                    {report ? <>    <div className="input-container" style={{ marginBottom: '20px' }}>
                        <input type="email" id="email" name="email" placeholder=" " required className='sign' value={mail} onChange={handleMail} />
                        <label htmlFor="email" className='title'>Email Address</label>
                    </div>

                        <div className="input-container" style={{ position: 'relative' }}>
                            <input
                                type={pass ? "password" : "text"}
                                id="password"
                                name="password"
                                placeholder=" "
                                required
                                className='sign'
                                value={password}
                                onChange={handlePass}
                            />
                            <label htmlFor="password" className='title'>Password</label>
                            {pass ? <FaEye onClick={checkPass} style={{ cursor: 'pointer', position: 'absolute', top: '35%', right: '25%' }} /> : <FaRegEyeSlash onClick={checkPass} style={{ cursor: 'pointer', position: 'absolute', top: '35%', right: '25%' }} />}
                        </div> </> : <>
                        <div className="input-container" style={{ marginBottom: '20px' }}>
                            <input type="email" id="email" name="email" placeholder=" " required className='sign2' value={mail} onChange={handleMail} />
                            <label htmlFor="email" className='title2'>Email Address</label>
                            <p style={{
                                fontFamily: 'lexend',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '300px',
                                color: 'red'
                            }}>Please enter your email again</p>
                        </div>


                        <div className="input-container" style={{ position: 'relative' }}>
                            <input
                                type={pass ? "password" : "text"}
                                id="password"
                                name="password"
                                placeholder=" "
                                required
                                className='sign2'
                                value={password}
                                onChange={handlePass}
                            />
                            <label htmlFor="password" className='title2' >Password</label>
                            {pass ? <FaEye onClick={checkPass} style={{ cursor: 'pointer', position: 'absolute', top: '25%', right: '25%' }} /> : <FaRegEyeSlash onClick={checkPass} style={{ cursor: 'pointer', position: 'absolute', top: '25%', right: '25%' }} />}
                            <p style={{
                                fontFamily: 'lexend',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '300px',
                                color: 'red'
                            }}>Wrong password ! Please re-enter</p>
                        </div> </>}

                    <div style={{
                        display: 'flex',
                        width: '500px',
                        justifyContent: 'space-between',
                        marginTop: '16px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input type="checkbox" className='box' style={{ margin: '0', height: '20px', width: '20px' }} />
                            <label htmlFor="checkboxLabel" style={{
                                fontFamily: 'lexend',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '300px'
                            }}>Remember me</label>
                        </div>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '24px',
                            fontWeight: '300px',
                            fontFamily: 'lexend',
                            cursor: 'pointer'
                        }} onClick={() => { navigate("/forgetPass") }}>Forgot password</p>
                    </div>

                    <button style={{
                        width: '500px',
                        padding: '20px',
                        marginTop: '30px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(113, 82, 243, 1)',
                        color: 'white',
                        border: 'none',
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: '300px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }} onClick={handleCheckPassword} >Login</button>
                </div>
            </div>
        </>
    );
};

export default Signup;
