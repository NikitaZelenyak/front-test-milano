import styled from "styled-components";

export const Item = styled.li`
  background-color: ${(p) => p.theme.color.secondaryPageBgr};
  margin-bottom: 5px;
  box-shadow: 3px 3px 15px 3px #000000;
  padding: 10px;
  transform: scale(0.9);
  border: none;
  border-radius: 12px;

  &:hover {
    transform: scale(1);
  }
  background-color: ${(p) => {
    if (p.confirm === true) {
      return "grey";
    }
  }};
`;

export const Title = styled.h2`
  margin: 0px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
`;
