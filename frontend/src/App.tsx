// import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Meals from "./components/Meals";
import EntryPage from "./components/EntryPage";
import RootLayout from "./routes/RootLayout";
import store from "./store/index";

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
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </body>
  );
}

export default App;
