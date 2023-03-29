import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from './Pages/Result/SearchResult';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Use an absolute path and the element prop for the search route */}
          <Route path="/search" element={<SearchResult />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;