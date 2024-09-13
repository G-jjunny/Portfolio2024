import React from "react";
import "./Styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import ReactHelmet from "./Components/ReactHelmet";

function App() {
  return (
    <div className="App">
      <ReactHelmet
        title="정경준"
        description="정경준의 포트폴리오"
        keywords=""
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
