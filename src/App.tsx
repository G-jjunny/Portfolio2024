import React from "react";
import "./Styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
