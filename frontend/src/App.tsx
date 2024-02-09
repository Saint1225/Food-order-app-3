// import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Meals from "./components/Meals";

function App() {
  const query = new QueryClient();

  return (
    <body className="bg-amber-700 bg-gradient-to-tr">
      <QueryClientProvider client={query}>
        <h1>test</h1>
        <Meals />
      </QueryClientProvider>
    </body>
  );
}

export default App;
