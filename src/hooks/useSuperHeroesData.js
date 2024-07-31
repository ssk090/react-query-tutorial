import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = () => {
  return useQuery({
    queryKey: ["super-heroes"], // This means that the query will be cached with the key super-heroes
    queryFn: () => fetchSuperheroes(), // this means that the query will be executed by calling the fetchSuperheroes function
    // gcTime: 5000, // Garbage collection time, this means that the cache will be cleared after 5 seconds
    // staleTime: 30000, // this means that the cache will be considered stale after 30 seconds
    // refetchOnMount: true // This means that the data will be refetched when the component mounts
    // refetchOnWindowFocus: true // This means that the data will be refetched when the window is in focus
    // refetchInterval: 2000, // This means that the data will be refetched every 2 seconds. It is paused when the window is not in focus
    // refetchIntervalInBackground: true, // This means that the data will be refetched every 2 seconds even when the window is not in focus
    // enabled: false, // This means that the query will not be executed when the component mounts
    // select: (data) =>
    //   data.data.map((superhero) => superhero.name.toUpperCase()), // This means that the data will be transformed before it is returned
    // // Follow this docs for better code practices: https://tkdodo.eu/blog/react-query-data-transformations#3-using-the-select-option
  });
};