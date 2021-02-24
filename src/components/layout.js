/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Header from './header';
import Navbar from './Navbar/Navbar';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import Burger from './Navbar/Burger';
import DesktopMenu from './Navbar/DesktopMenu';
import MobileMenu from './Navbar/MobileMenu';

import Footer from './Footer/Footer';
import { theme } from '../theme/globalStyles';
import './layout.css';

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  
  useOnClickOutside(node, () => setOpen(false));

  console.log(node)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const isPageWide = useMediaQuery('(min-width: 1080px)');
  
  return (
    <ThemeProvider theme={theme}>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      {/* <Navbar/> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1600,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div
          style={{
            minHeight: `5rem`
          }}
        >
          { isPageWide ? 
            (<DesktopMenu />) : 
            (
              <div>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <MobileMenu open={open} setOpen={setOpen} id={menuId} />
              </div>
            ) 
          }
        </div>
        
        <main>
            {children}
        </main>
        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
      <Footer />
    </ThemeProvider>
  );
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
