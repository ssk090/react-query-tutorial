import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export default function RQSuperheroesPage() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: () => fetchSuperheroes(),
    // gcTime: 5000, // Garbage collection time, this means that the cache will be cleared after 5 seconds
    // staleTime: 30000, // this means that the cache will be considered stale after 30 seconds
    // refetchOnMount: true // This means that the data will be refetched when the component mounts
    // refetchOnWindowFocus: true // This means that the data will be refetched when the window is in focus
    // refetchInterval: 2000, // This means that the data will be refetched every 2 seconds. It is paused when the window is not in focus
    // refetchIntervalInBackground: true, // This means that the data will be refetched every 2 seconds even when the window is not in focus
    enabled: false, // This means that the query will not be executed when the component mounts
  });
  console.log(data);

  if (isError) return <div> Error: {error.message} </div>;

  if (isLoading) return <div> Loading... </div>;

  return (
    <div>
      <h1>RQSuperheroesPage</h1>
      {/*  useQuery on Click of button */}
      {/* <button onClick={refetch}>Fetch Superheroes</button> */}
      {data?.data.map((superhero) => {
        return (
          <div key={superhero.id}>
            <h2>{superhero.name}</h2>
            <p>{superhero.alterEgo}</p>
          </div>
        );
      })}
    </div>
  );
}

// Polling: This is a technique that allows the client to request data from the server at regular intervals.
// This is useful when you want to keep the data up to date with the server.
