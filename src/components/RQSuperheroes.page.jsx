import { useState } from "react";
import {
  useAddSuperHero,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

export default function RQSuperheroesPage() {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const { data, isLoading, isError, error, refetch } = useSuperHeroesData();

  const { mutate: addHero } = useAddSuperHero();

  const handleAddSuperHero = () => {
    console.log("add superhero", name, alterEgo);
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isError) return <div> Error: {error.message} </div>;

  if (isLoading) return <div> Loading... </div>;

  return (
    <div>
      <h1>RQSuperheroesPage</h1>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="alterEgo"
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddSuperHero}>Add Superhero</button>
      </div>
      {/*  useQuery on Click of button */}
      <button onClick={refetch}>Fetch Superheroes</button>
      {data?.data.map((superhero) => {
        return (
          <div key={superhero.id}>
            <Link to={`/rq-super-heroes/${superhero.id}`}>
              {superhero.name}
            </Link>
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
