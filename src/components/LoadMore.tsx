import { FC } from "react";
import { Wrapper } from "./LoadMore.styles";

type Props = {
  text: string;
  callback: () => void;
};

const LoadMore: FC<Props> = ({ text, callback }) => {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};

export default LoadMore;
