import logo from "./logo.svg";
import "./App.css";
import Navbars from "./components/Navbar/Navbars";
import Hero from "./components/Hero/Hero";
import Rating from "./components/rating/Rating";
import RatingScore from "./components/rating_score/RatingScore";

function App() {
  return (
    <div>
      <Navbars />
      <Hero />
      <RatingScore />
    </div>
  );
}

export default App;
