import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { HeaderContainer, LogoWrapper, LinksWrapper, StyledLink } from './DesktopMenu.styles';

const DesktopMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Logo/LOGO-HOSEN.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link to="/" >
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </Link>
      </LogoWrapper>
      <LinksWrapper>
        <StyledLink to="/">Aktuality</StyledLink>
        <StyledLink to="/">Menu</StyledLink>
        <StyledLink to="/">Galerie</StyledLink>
        <StyledLink to="/">Kontakty</StyledLink>
        <StyledLink to="/">Catering</StyledLink>
      </LinksWrapper>
    </HeaderContainer>
  )
}

export default DesktopMenu;
