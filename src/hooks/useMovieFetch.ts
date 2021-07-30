import { useEffect, useState } from "react";

import API, { Cast, Crew, Movie } from "../API";
import { isPersistedState } from "../helpers";


export type MovieState = Movie & { actors: Cast[], directors: Crew[], }

const useMovieFetch = (movieID: number) => {
  const [state, setState] = useState<MovieState>({} as MovieState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);

        // From Session Storage
        const sessionState = isPersistedState(movieID.toString());

        if (sessionState) {
          console.log("Grabbing movie from Storage");

          setState(sessionState);
          setLoading(false);
          return;
        }

        const movie = await API.fetchMovie(movieID);
        const credits = await API.fetchCredits(movieID);

        // Get director
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, [movieID]);

  // Write to session storage
  useEffect(() => {
    sessionStorage.setItem(movieID.toString(), JSON.stringify(state));
  }, [movieID, state]);

  return {
    state,
    loading,
    error,
  };
};

export { useMovieFetch };
