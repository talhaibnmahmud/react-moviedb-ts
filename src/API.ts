import {
  API_KEY,
  API_URL,
  SEARCH_BASE_URL,
  POPULAR_BAES_URL,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from "./config";

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  revenue: number;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Cast = {
  character: string;
  credit_id: string;
  name: string;
  profile_path: string;
};

export type Crew = {
  job: string;
  name: string;
  credit_id: number;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

const apiSettings = {
  fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BAES_URL}&page=${page}`;

    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieID: number): Promise<Movie> => {
    const endpoint = `${API_URL}movie/${movieID}?api_key=${API_KEY}`;

    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieID: number): Promise<Credits> => {
    const endpoint = `${API_URL}movie/${movieID}/credits?api_key=${API_KEY}`;

    return await (await fetch(endpoint)).json();
  },
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();

    return reqToken.request_token;
  },
  authenticate: async (
    requestToken: string,
    username: string,
    password: string
  ) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };

    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();

    if (data.success) {
      const sessionID = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();

      return sessionID;
    }
  },
  rateMovie: async (sessionID: any, movieID: number, value: number) => {
    const endpoint = `${API_URL}movie/${movieID}/rating?api_key=${API_KEY}&session_id=${sessionID}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json();

    return rating;
  },
};

export default apiSettings;
