import { RouterProvider } from "react-router-dom";
import MyProvider from "./context/MyProvider";
import { router } from "./routes/Router";

const App = () => {
  return (
    <>
      <MyProvider>
        <RouterProvider router={router} />
      </MyProvider>
    </>
  );
};

export default App;
