import React, { Children, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({Children}) =>{
    const {isAdmin} = useState(AdminContext);
    return(
        isAdmin ? Children: <Navigate to="/not-admin" />
    )
}

export default PrivateRoute