import React from "react";
import Layout from "./components/Layout/Layout";

function App({ children }) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default App;
