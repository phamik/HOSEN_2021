import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import { 
  FooterContainer,
  OpeningTimesContainer,
  LogoContainer,
  AddressContainer
} from './Footer.styles';

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Logo/Text-LogoHoSenGOLD.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      site {
        siteMetadata {
          openingTimes
          address
        }
      }
    }
  `);

  const showText = useMediaQuery('(min-width: 768px)');
  
  return (
    <FooterContainer>
      
      {showText && 
        <OpeningTimesContainer>
          <span>OTEVÍRACÍ HODINY:</span>
          {data.site.siteMetadata.openingTimes}
        </OpeningTimesContainer>
      }
      
      <LogoContainer>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <br/>
        © {new Date().getFullYear()}
      </LogoContainer>

      {showText && 
        <AddressContainer>
          <span>ADRESA:</span>
          {data.site.siteMetadata.address}
        </AddressContainer>
      }
      
      
    </FooterContainer>
  )
}

export default Footer;