import styled from 'styled-components';

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: row;
 	background-color: ${props => props.theme.color.red};
	color: ${props => props.theme.color.gold};
	bottom: 0;
	align-items: center;
	justify-content: space-between;
	font-weight: ${props => props.theme.fontWeight.bold};
	padding: 0 1.45rem;

	@media (max-width: ${props => props.theme.media.small}) {
    flex-direction: column;
  }
	
	& div ::before {
  	content: "";
	}

	& div ::after {
		content: "";
	}
`;

export const OpeningTimesContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LogoContainer = styled.div`
	margin: 1rem;
  width: 20%;
	max-width: 190px;
  top: 0;
  left: 0;
	text-align: center;
`;

export const AddressContainer = styled.div`
	display: flex;
	flex-direction: column;
`;