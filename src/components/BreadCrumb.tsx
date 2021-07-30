import { FC } from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content } from "./BreadCrumb.styles";

type Props = {
  movieTitle: string;
};

const BreadCrumb: FC<Props> = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
};

export default BreadCrumb;