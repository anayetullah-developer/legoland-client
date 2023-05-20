import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading) {
        return <div className="position-absolute top-50 start-50 text-primary"><Spinner className="" animation="border" /></div>
    }

    if(user) {
        return children;
    }else {
        return <Navigate state={{from: location}} replace to="/login"/>
    }
};

export default ProtectedRoute;