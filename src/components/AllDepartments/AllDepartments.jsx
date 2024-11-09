import { CiSearch } from "react-icons/ci";
import './AllDepartments.css'
import { useEffect, useState } from "react";

const AllDepartments = () => {
    const [dataEmployee, setdataEmployee] = useState([])
    useEffect(() => {
        const handleData = async () => {
            const res = await fetch('https://671c5ff22c842d92c382ba18.mockapi.io/mindxpro')
            const data = await res.json()
            setdataEmployee(data)
        }
        handleData()
    }, [])
    const listDepart = []
    dataEmployee.forEach(item => {
        if (!listDepart.includes(item.department)) {
            listDepart.push(item.department)
        }
    })
    return (
        <>
            <div className="AllDepartments">
                <div className="boxSearch">
                    <CiSearch />
                    <input className="search" placeholder="Search" type="text" />
                </div>
                <div className="listDepartment">
                    {listDepart.map((data) => {

                        const memDepart = []
                        dataEmployee.forEach(item => {
                            if (item.department == data) {
                                memDepart.push(item)
                            }
                        })
                        return (
                            <>
                                <div className="detailDepartment">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} className="topDepart">
                                        <h3 style={{ fontSize: '20px' }}>{data}</h3>
                                        <p style={{ fontSize: '14px', color: '#A2A1A8' }}>{memDepart.length} member</p>
                                        <hr style={{ width: '100%' }} />
                                        {memDepart.map((item) => {
                                            return (
                                                <div style={{ display: 'flex', gap: '20px' }} className="member">
                                                    <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={item.img} />
                                                    <div>
                                                        <p>{item.name}</p>
                                                        <p style={{ fontSize: '12px', color: '#A2A1A8' }}>{item.designation}</p>
                                                    </div>

                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>

            </div>
        </>
    )
}
export default AllDepartments