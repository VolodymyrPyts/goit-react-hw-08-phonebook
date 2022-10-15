
import { UserNav, UserLabel } from './UserMenu.styled';
import { Button} from "../../pages/RegisterPage/RegisterPage.styled";
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from 'redux/auth/operation';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispath = useDispatch();
  return (
    <UserNav>
            <UserLabel>{useSelector(selectUser).name}</UserLabel>
      <Button type='button' onClick={() =>dispath(userLogout())}>Logout</Button>
    </UserNav>
  )
}