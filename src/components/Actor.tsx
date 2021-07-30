import { FC } from "react";
import { Wrapper, Image } from "./Actor.styles";

type Props = {
  name: string;
  character: string;
  imageURL: string;
};

const Actor: FC<Props> = ({ name, character, imageURL }) => {
  return (
    <Wrapper>
      <Image src={imageURL} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

export default Actor;
