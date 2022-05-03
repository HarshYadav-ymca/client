import "../styles/index.css";
import NavBar from "./navBar";
import Home from "./homeTop";
import HomeBottom from "./homebottom";
import Footer from "./footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <HomeBottom />
      <Footer />
    </div>
  );
}

export default App;
