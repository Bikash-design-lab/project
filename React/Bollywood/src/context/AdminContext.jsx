import react, { Children, createContext, useState } from 'react'

export const  AdminContext = createContext();

export const AdminProvider = ({Children})=>{
    const [isAdmin, setIsAdmin] = useState(false)
    return(
        <AdminContext.Provider value={{isAdmin, setIsAdmin}}>
            {Children}
        </AdminContext.Provider>
    )
}