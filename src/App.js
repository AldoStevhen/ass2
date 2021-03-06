import React from "react";
import "./App.css";
import GetSection from "./components/GetSection/view";
import PostSection from "./components/PostSection/view";

function App() {
  return (
    <div id="app" className="container my-3">
      <h3>React Axios example - netlify 17/06/2022</h3>
      <GetSection />
      <PostSection />
      <httpCommon />
    </div>
  );
}

export default App;
