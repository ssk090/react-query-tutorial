import React from "react";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const DynamicParallelQueries = ({ heroIds }) => {
  const queryResults = useQueries({
    queries: heroIds.map((id) => ({
      queryKey: ["super-hero", id],
      queryFn: () => fetchSuperHero(id),
    })),
  });

  console.log({ queryResults });
  return <div>DynamicParallelQueries</div>;
};
