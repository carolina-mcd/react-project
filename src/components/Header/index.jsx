import { useContext } from 'react';
import propTypes from 'prop-types';

import { ThemeContext } from '../../context/ThemeContext';
import Button from '../Button';


import './Header.scss';

export function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1 className='title'>{props.title}</h1 >
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {props.children}
    </>
  )
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};