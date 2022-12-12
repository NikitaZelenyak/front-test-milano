import { Item } from "commonStyle/common.styled";

export const Service = ({ service }) => {
  const { category, name, price } = service;
  return (
    <Item>
      <h2>{name}</h2>
      <span>{category}</span> <span>${price}</span>
    </Item>
  );
};
