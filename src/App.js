import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App" style={{backgroundColor: '#FFF5E4'}}>
      <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
