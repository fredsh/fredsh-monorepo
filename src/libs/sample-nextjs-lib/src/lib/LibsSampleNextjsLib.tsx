import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibsSampleNextjsLibProps {}

const StyledLibsSampleNextjsLib = styled.div`
  color: pink;
  border: 2px solid black;
  text-align: center;
  margin: 10px
`;

export function LibsSampleNextjsLib(props: LibsSampleNextjsLibProps) {
  return (
    <StyledLibsSampleNextjsLib>
      <h1>Welcome to LibsSampleNextjsLib!</h1>
    </StyledLibsSampleNextjsLib>
  );
}

export default LibsSampleNextjsLib;
