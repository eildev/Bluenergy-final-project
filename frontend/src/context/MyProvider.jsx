import { createContext } from "react";

export const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const user = "kishor";

  const info = {
    user,
  };
  return <MyContext.Provider value={info}>{children}</MyContext.Provider>;
};

export default MyProvider;
