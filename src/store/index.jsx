import { createContext, useState } from "react";

export const StoreContext = createContext({
    setCurrentPage(currentPage) { 
        
    }
});

const StoreProvider = ({ children }) => {
    // thuc hien cac chuc nang filter 
    const [currentPage, setCurrentPage] = useState(0);
    // truyền state và dispatch xuống dưới
    return <StoreContext.Provider value={
        {
            currentPage,
            setCurrentPage: (currentPage) => {
                setCurrentPage(currentPage);
            }
        }
    }>{children}</StoreContext.Provider>;
}

export default StoreProvider;