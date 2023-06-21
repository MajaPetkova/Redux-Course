import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import {Header} from "./components/header/Header";
import { MovieDetails } from "./components/movieDetails/MovieDetails";
import { PageNotFound } from "./components/pageNotFound/PageNotFound";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
