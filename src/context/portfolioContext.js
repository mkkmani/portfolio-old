import React from "react";

const PortfolioContext = React.createContext({
  projectsList: [],
  addToList: () => {},
});

export default PortfolioContext;
