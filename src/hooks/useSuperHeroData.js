import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// method 1
const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1]; // Accessing heroId from queryKey array
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery({
    queryKey: ["super-hero", heroId],
    queryFn: fetchSuperHero,
  });
};

// method 2
// const fetchSuperHero = (heroId) => {
//   return axios.get(`http://localhost:4000/superheroes/${heroId}`);
// };

// export const useSuperHeroData = (heroId) => {
//   return useQuery({
//     queryKey: ["super-hero", heroId],
//     queryFn: () => fetchSuperHero(heroId),
//   });
// };
