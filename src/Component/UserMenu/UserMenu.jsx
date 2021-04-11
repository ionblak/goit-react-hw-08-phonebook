import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import { createUseStyles } from 'react-jss';
import avatar from './default-img.png';

const useStyles = createUseStyles({
  user: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatar: {
    marginRight: '5px',
    borderRadius: '50%',
  },
  button: {
    display: 'block',
    paddingRight: '10px',
    paddingLeft: '10px',

    marginLeft: '10px',
    backgroundColor: 'rgba(181, 86, 38, 0.34)',
    color: 'white',
    borderRadius: '5px',
    borderColor: 'orange',
    '&:hover': {
      color: 'orange',
    },
  },
});

const UserMenu = () => {
  const classes = useStyles();

  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logOut());
  return (
    <div className={classes.user}>
      <img
        className={classes.userAvatar}
        src={avatar}
        alt="avatar"
        width="32"
        height="32"
      />
      <span>Hi,{name}</span>
      <button className={classes.button} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
