import axios from "axios";
import { useEffect, useState } from "react";

export default function SuperheroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (error) return <div> Error: {error} </div>;
  if (isLoading) return <div> Loading... </div>;

  return (
    <>
      <h1>SuperheroesPage</h1>
      {data.map((superhero) => {
        return (
          <div key={superhero.id}>
            <h2>{superhero.name}</h2>
            <p>{superhero.alterEgo}</p>
          </div>
        );
      })}
    </>
  );
}
