import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid black;
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-right: 1px solid black;
  height: 100vh;
  div{
    margin-bottom: 10px;
  }
`;

export const ContentContainer = styled.div`
  padding: 20px;
`;