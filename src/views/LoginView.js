import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import { createUseStyles } from 'react-jss';
import Container from '../Component/Container';

const useStyles = createUseStyles({
  form: {},
  label: {
    display: 'block',
    marginTop: '10px',
    marginBottom: '5px',
    fontWeight: 700,
  },

  input: {
    height: '20px',
    outline: 'none',
    '&:focus': {
      border: ['2px', 'solid', 'orange'],
      boxShadow: [
        'inset',
        '0px',
        '0px',
        '3px',
        '3px',
        'rgba(181, 86, 38, 0.34)',
      ],
    },
  },
  inputPassword: {
    marginLeft: '10px',
  },
  inputEmail: {
    marginLeft: '40px',
  },
  button: {
    display: 'block',
    paddingRight: '10px',
    paddingLeft: '10px',

    marginTop: '10px',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'rgb(54, 140, 163)',
    color: 'white',
    borderRadius: '5px',
    '&:hover': {
      color: 'orange',
    },
  },
});

const LoginViev = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    resetForm();
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={classes.label}>
          Email
          <input
            className={[classes.inputEmail, classes.input].join(' ')}
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label className={classes.label}>
          Password
          <input
            className={[classes.inputPassword, classes.input].join(' ')}
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={handleChangePassword}
          />
        </label>

        <button className={classes.button} type="submit">
          Login
        </button>
      </form>
    </Container>
  );
};

export default LoginViev;
