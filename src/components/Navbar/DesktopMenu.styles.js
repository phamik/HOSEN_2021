import styled from 'styled-components';
import { Link } from 'gatsby';

export const HeaderContainer = styled.div`
  display: inline-block;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  margin: 1rem;
  width: 7rem;
  top: 0;
  left: 0;
  float: left;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  right: 0;
  float: right;
  margin: 1rem;
  padding-top: 2rem;
  
   a {
     margin-right: 1rem;
   }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.color.gold};
  font-weight: ${props => props.theme.fontWeight.bold};
  &:hover {
    text-decoration: underline
  }
`;