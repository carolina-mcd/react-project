import { useContext } from 'react';
import propTypes from 'prop-types';

import { ThemeContext } from '../context/ThemeContext';


export default function Button(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={props.onClick}
      style={{
        color: theme === 'dark' ? '#fff' : '#000',
        background: theme === 'dark' ? '#000' : '#fff',
      }}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func.isRequired,
};