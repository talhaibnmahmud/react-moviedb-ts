import { FC } from "react";

// Helpers
import { calcTime, convertMoney } from "../helpers";

import { Wrapper, Content } from "./MovieInfoBar.styles";

type Props = {
  time: number;
  budget: number;
  revenue: number;
};

const MovieInfoBar: FC<Props> = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Running Time: {calcTime(time)}</p>
        </div>
        <div className="column">
          <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div className="column">
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
};

export default MovieInfoBar;
