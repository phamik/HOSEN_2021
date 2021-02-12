import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
  
  return (
    <FooterContainer>
      <OpeningTimesContainer>
        <span>OTEVÍRACÍ HODINY:</span>
        {data.site.siteMetadata.openingTimes}
      </OpeningTimesContainer>
      <LogoContainer>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </LogoContainer>
      <AddressContainer>
        <span>ADRESA:</span>
        {data.site.siteMetadata.address}
      </AddressContainer>
    </FooterContainer>
  )
}

export default Footer;