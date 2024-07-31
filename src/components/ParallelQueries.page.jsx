import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHero = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueries = () => {
  const { data: superheroes } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: fetchSuperHero,
  });
  const { data: friends } = useQuery({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  });
  return <div>ParallelQueries</div>;
};

export default ParallelQueries;
