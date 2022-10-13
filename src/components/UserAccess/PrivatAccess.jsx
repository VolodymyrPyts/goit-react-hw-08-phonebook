import { useSelector } from "react-redux";
import { Navigato } from "react-router-dom";
import { selectIsRefreshing, selectIsLoggedIn} from "redux/auth/selectors";



export const PrivatAccess =({component: Component, redirectTo = '/'}) => {
    const isLoggenIn = useSelector(selectIsLoggedIn)
    const isRefreshing = useSelector(selectIsRefreshing)

if (!isLoggenIn && !isRefreshing){
    return <Navigato to ={redirectTo}/>
}
return Component
}