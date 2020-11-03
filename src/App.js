import React from "react";
import Header from "./components/Header";
import Generator from "./components/Generator";
import QRCodeContainer from "./components/QRCodeContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Generator />
      <QRCodeContainer />
    </div>
  );
}

export default App;
