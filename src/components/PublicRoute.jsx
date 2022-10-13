import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors"

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
     
    if (isLoggedIn) {
        return <Navigate to={redirectTo}/>
    }
    return Component;
}