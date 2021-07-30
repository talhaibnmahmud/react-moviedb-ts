import { FC } from "react";
import { Wrapper, Content } from "./Grid.styles";

type Props = {
  header: string;
};

const Grid: FC<Props> = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Grid;
