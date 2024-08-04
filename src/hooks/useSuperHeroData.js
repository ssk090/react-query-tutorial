import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// method 1
const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1]; // Accessing heroId from queryKey array
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["super-hero", heroId],
    queryFn: fetchSuperHero,
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-hero")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) return { data: hero };
      return undefined;
    },
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
