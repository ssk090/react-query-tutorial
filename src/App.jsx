import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SuperheroesPage from "./components/Superheroes.page";
import RQSuperheroesPage from "./components/RQSuperheroes.page";
import HomePage from "./components/Home.page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RQSuperhero from "./components/RQSuperhero";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/rq-super-heroes/:heroId" Component={RQSuperhero} />
            <Route path="/super-heroes" Component={SuperheroesPage} />
            <Route path="/rq-super-heroes" Component={RQSuperheroesPage} />
            <Route path="/" Component={HomePage} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
