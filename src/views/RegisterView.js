import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import Container from '../Component/Container';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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
    marginBottom: '15px',
  },
  inputEmail: {
    marginLeft: '40px',
  },
  inputName: {
    marginLeft: '36px',
  },
  button: {
    display: 'block',
    paddingRight: '10px',
    paddingLeft: '10px',
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

const RegisterViev = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    resetForm();
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const resetForm = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <Container>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label className={classes.label}>
          Name
          <input
            className={[classes.inputName, classes.input].join(' ')}
            type="text"
            placeholder="name"
            value={name}
            required
            onChange={handleChangeName}
          />
        </label>
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
          Register
        </button>
      </form>
    </Container>
  );
};

export default RegisterViev;
