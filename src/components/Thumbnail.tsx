import { FC } from "react";
import { Link } from "react-router-dom";

import { Image } from "./Thumbnail.styles";

type Props = {
  image: string;
  movieID?: number;
  clickable: boolean;
};

const Thumbnail: FC<Props> = ({ image, movieID, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieID}`}>
          <Image src={image} alt="Thumbnail" />
        </Link>
      ) : (
        <Image src={image} alt="Thumbnail" />
      )}
    </div>
  );
};

export default Thumbnail;
