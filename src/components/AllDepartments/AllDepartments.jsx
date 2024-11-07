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


    return (
        <>
            <div className="AllDepartments">
                <div className="boxSearch">
                    <CiSearch />
                    <input className="search" placeholder="Search" type="text" />
                </div>
                <div className="listDepartment">
                    {dataEmployee.map((data) => {
                        return (
                            <>
                                <div className="detailDepartment">
                                    <p>{data.department}</p>
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