import "./App.css";
import { useState } from "react";
import PortfolioContext from "./context/portfolioContext";
import Portfolio from "./components/Portfolio";

const App = () => {
  const [projectsList, setProjectsList] = useState([]);

  const addToList = (details) => {
    setProjectsList((prevList) => [...prevList, details]);
  };

  const contextValue = { projectsList, addToList: addToList };

  return (
    <>
      <PortfolioContext.Provider value={contextValue}>
        <Portfolio />
      </PortfolioContext.Provider>
    </>
  );
};

export default App;
