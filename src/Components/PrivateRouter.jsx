import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {userfinal,loading} =useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(userfinal){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivateRouter;
