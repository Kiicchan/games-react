import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { Nav, Footer } from "../layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
        <Nav />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
