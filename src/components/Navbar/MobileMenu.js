
import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'gatsby';
import { StyledMenu } from './MobileMenu.styles';

const MobileMenu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <>

      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <Link to="/">Aktuality</Link>
        <Link to="/">Menu</Link>
        <Link to="/">Galerie</Link>
        <Link to="/">Kontakty</Link>
        <Link to="/">Catering</Link>
      </StyledMenu>

    </>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}

export default MobileMenu;