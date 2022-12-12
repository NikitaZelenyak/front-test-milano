import { Wrapper, Title } from "./Container.styled";

export const Container = ({ children, list }) => {
  return (
    <Wrapper>
      <Title>{list}</Title>
      <ul>{children}</ul>
    </Wrapper>
  );
};
