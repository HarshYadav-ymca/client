import "../styles/index.css";
import NavBar from "./navBar";
import Home from "./home";
import baseimg from "../images/home.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${baseimg})`,
        backgroundSize: "cover",
      }}
    >
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
