import styled from 'styled-components';

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: row;
 	background-color: ${props => props.theme.color.red};
	color: ${props => props.theme.color.gold};
	bottom: 0;
	align-items: center;
	justify-content: center;
	font-weight: ${props => props.theme.fontWeight.bold};
	padding: 0 1.45rem;

	@media (max-width: ${props => props.theme.media.small}) {
    flex-direction: column;
  }
`;

export const OpeningTimesContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 5rem;
	@media (max-width: ${props => props.theme.media.small}) {
    margin-right: 0;
  }
`;

export const LogoContainer = styled.div`
	margin: 1rem;
  width: 20%;
  top: 0;
  left: 0;
	margin-right: 5rem;
	text-align: center;
	
	@media (max-width: ${props => props.theme.media.small}) {
    margin-right: 0;
  }
`;

export const AddressContainer = styled.div`
	display: flex;
	flex-direction: column;
`;