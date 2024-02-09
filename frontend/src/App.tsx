import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Meals from "./components/Meals";

function App() {
  const query = new QueryClient();

  return (
    <QueryClientProvider client={query}>
      <Meals />
    </QueryClientProvider>
  );
}

export default App;
