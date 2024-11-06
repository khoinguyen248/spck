import { createContext, useState } from "react";

export const StoreContext = createContext({
    setCurrentPage(currentPage) { },
    
    setListWorkers(listWorkers) {}
});

const StoreProvider = ({ children }) => {
    // thuc hien cac chuc nang filter 
    const [currentPage, setCurrentPage] = useState(null);
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
            }
        }
    }>{children}</StoreContext.Provider>;
}

export default StoreProvider;