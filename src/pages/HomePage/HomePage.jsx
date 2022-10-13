import { MdOutlineMenuBook } from "react-icons/md"
import { PLink, Welcome } from './HomePage.styled'

const HomePage = () => {
    return (
        <Welcome>
            <div>
                <MdOutlineMenuBook size={56}/>
                <h2>Welcome!</h2>
            </div>
            <p>Please <PLink to='/login'>Login</PLink> or <PLink to='/register'>Register</PLink> to continue</p>
        </Welcome>
    )
}
export default HomePage;