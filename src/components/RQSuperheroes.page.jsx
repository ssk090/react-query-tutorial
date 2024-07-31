import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export default function RQSuperheroesPage() {
  const { data, isLoading, isError, error, refetch } = useSuperHeroesData();

  if (isError) return <div> Error: {error.message} </div>;

  if (isLoading) return <div> Loading... </div>;

  return (
    <div>
      <h1>RQSuperheroesPage</h1>
      {/*  useQuery on Click of button */}
      <button onClick={refetch}>Fetch Superheroes</button>
      {data?.data.map((superhero) => {
        return (
          <div key={superhero.id}>
            <h2>{superhero.name}</h2>
            <p>{superhero.alterEgo}</p>
          </div>
        );
      })}

      {/* {data.map((superhero) => {
        return (
          <div key={superhero}>
            <h2>{superhero}</h2>
          </div>
        );
      })} */}
    </div>
  );
}

// Polling: This is a technique that allows the client to request data from the server at regular intervals.
// This is useful when you want to keep the data up to date with the server.
