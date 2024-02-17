// import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Meals from "./components/Meals";
import EntryPage from "./components/EntryPage";
import RootLayout from "./routes/RootLayout";

function App() {
  const query = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <EntryPage /> },
        { path: "meals", element: <Meals /> },
      ],
    },
  ]);

  return (
    <body className="bg-blueGray-800 bg-gradient-to-tr overflow-auto flex flex-col">
      <QueryClientProvider client={query}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </body>
  );
}

export default App;
