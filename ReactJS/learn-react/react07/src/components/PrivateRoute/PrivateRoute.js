import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    const isLogin = false;
    return (
        <div>
            {isLogin ? <Outlet /> : (<Navigate to="/login" />)}

        </div>
    )
}
