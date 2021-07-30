import {
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import SearchIcon from "../images/search-icon.svg";

type Props = {
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

const SearchBar: FC<Props> = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={SearchIcon} alt="search-icon" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
