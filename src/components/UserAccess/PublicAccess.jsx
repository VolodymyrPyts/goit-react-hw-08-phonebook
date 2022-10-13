import { useSelector } from "react-redux";
import { Navigato } from "react-router-dom";
import { selectIsLoggedIn} from "redux/auth/selectors";



export const PrivatAccess =({component: Component, redirectTo = '/'}) => {
    const isLoggenIn = useSelector(selectIsLoggedIn)
    
if (isLoggenIn){
    return <Navigato to ={redirectTo}/>
}
return Component
}