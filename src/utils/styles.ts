import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  padding-top: 80px;
`;
export const Text = styled.p`
  ${color => color ? `color: ${color}` : 'color: #ffffff'}
`;