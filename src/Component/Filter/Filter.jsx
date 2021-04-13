import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import { getValueFilter } from '../../redux/Contacts/contacts-selectors';
import { filterOutContacts } from '../../redux/Contacts/contacts-actions';

const useStyles = createUseStyles({
  filter: {
    marginBottom: '20px',
  },
  input: {
    padding: '5px',
    outline: 'none',
    '&:focus': {
      border: ['2px', 'solid', 'blue'],
      boxShadow: [
        'inset',
        '0px',
        '0px',
        '3px',
        '3px',
        'rgba(116, 113, 255, 0.34)',
      ],
    },
  },
});

const Filter = () => {
  const classes = useStyles();
  const value = useSelector(getValueFilter);
  const dispatch = useDispatch();
  return (
    <div className={classes.filter}>
      <h3 className={classes.titel}>Find contacts by name</h3>
      <input
        className={classes.input}
        type="text"
        placeholder="Search contact"
        name="filter"
        value={value}
        onChange={e => dispatch(filterOutContacts(e.target.value))}
      ></input>
    </div>
  );
};

export default Filter;
