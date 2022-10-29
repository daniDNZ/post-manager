import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Layout>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Welcome />} />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
