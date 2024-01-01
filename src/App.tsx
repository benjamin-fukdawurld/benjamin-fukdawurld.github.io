import React, { Children } from "react";
import { AppContainer } from "./style";
import Header from "./components/Header";
import AllFormations from "./components/Formation";

function App() {
  return (
    <AppContainer>
      <Header />
      <AllFormations />
    </AppContainer>
  );
}

export default App;
