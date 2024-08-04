import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchColors = async ({ pageParam = 1 }) => {
  const response = await axios.get(
    `http://localhost:4000/colors?_limit=2&_page=${pageParam}`
  );
  return response.data;
};

const InfiniteQuery = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["colors"],
    queryFn: fetchColors,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length < 4) {
        return allPages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <div>
        {data?.pages.map((page, i) => (
          <div key={i}>
            {page.map((color) => (
              <div key={color.id}>
                <h2>
                  {color.id}. {color.label}
                </h2>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
          Load More
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Loading..." : ""}</div>
    </>
  );
};

export default InfiniteQuery;
