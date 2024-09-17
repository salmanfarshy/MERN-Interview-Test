import { createBrowserRouter, RouterProvider } from "react-router-dom";
import All_Drawings from "./Pages/All_Drawings";
import Single_Drawing from "./Pages/Single_Drawing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <All_Drawings />,
  },
  {
    path: "/:id",
    element: <Single_Drawing />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
