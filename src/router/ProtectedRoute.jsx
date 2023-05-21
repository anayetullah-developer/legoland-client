
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import loadingImg from "../assets/91771-spinning-circles-loading-animation.json"
import { useContext } from 'react';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading) {
        return <Lottie animationData={loadingImg}/>
    }

    if(user) {
        return children;
    }else {
        return <Navigate state={{from: location}} replace to="/login"/>
    }
};

export default ProtectedRoute;