import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

const UserMenu = ({ avatar }) => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logOut());
  return (
    <div>
      <img src={avatar} alt="" width="32" />
      <span>Welcome, {name}</span>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
