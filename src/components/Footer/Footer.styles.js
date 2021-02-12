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
`;

export const OpeningTimesContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 5rem;
`;

export const LogoContainer = styled.div`
	margin: 1rem;
  width: 10rem;
  top: 0;
  left: 0;
	margin-right: 5rem;
`;

export const AddressContainer = styled.div`
	display: flex;
	flex-direction: column;
`;