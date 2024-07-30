import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export default function RQSuperheroesPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: () => fetchSuperheroes(),
  });
  console.log(data);

  if (isError) return <div> Error: {error.message} </div>;

  if (isLoading) return <div> Loading... </div>;

  return (
    <div>
      <h1>RQSuperheroesPage</h1>
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
