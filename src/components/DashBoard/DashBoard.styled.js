import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  padding: 20px;
  gap: 10px;
  height: 94vh;
  position: static;
  background-color: ${(p) => p.theme.color.primaryPageBgr};
  border: 2px solid ${(p) => p.theme.color.borderColor};
`;
