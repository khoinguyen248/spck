import { createContext, useState } from "react";

export const StoreContext = createContext({
    setCurrentPage(currentPage) { },
    
    setListWorkers(listWorkers) {}
});

const StoreProvider = ({ children }) => {
    // thuc hien cac chuc nang filter 
    const [currentPage, setCurrentPage] = useState(null);
    const [currentPage2, setCurrentPage2] = useState(null);
    // truyền state và dispatch xuống dưới
    const [listWorkers, setListWorkers] = useState([]);
    return <StoreContext.Provider value={
        {
            currentPage,
            listWorkers,
            setCurrentPage: (currentPage) => {
                setCurrentPage(currentPage);
            },

            setListWorkers: (listWorkers) => {
                setListWorkers(listWorkers);
            },
            setCurrentPage2:  (currentPage2) => {
                setCurrentPage(currentPage2);
            },
        }
    }>{children}</StoreContext.Provider>;
}

export default StoreProvider;