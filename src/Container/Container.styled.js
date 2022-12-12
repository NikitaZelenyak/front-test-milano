import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.color.secondaryPageBgr};
  border: 2px solid ${(p) => p.theme.color.borderColor};
  padding: 5px;
  height: 94vh;
  overflow: scroll;
`;
export const Title = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.l};
  text-align: center;
`;
