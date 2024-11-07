import { CiSearch } from "react-icons/ci";
import './AllDepartments.css'
const AllDepartments = () => {
    return (
        <>
            <div className="AllDepartment">
                <div className="boxSearch">
                    <CiSearch />
                    <input className="search" placeholder="Search" type="text" />
                </div>

            </div>
        </>
    )
}
export default AllDepartments