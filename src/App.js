import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes } from "react-router-dom";
import { CreateContainer, Header, MainContainer } from "./components";
import { Route } from "react-router-dom";
const App = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
