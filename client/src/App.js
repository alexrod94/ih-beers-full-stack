import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import SingleBeer from "./pages/SingleBeer/SingleBeer";
import CreateBeer from "./pages/CreateBeer/CreateBeer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/beers/create" element={<CreateBeer />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
