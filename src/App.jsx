import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/category/:slug" element={<CategoryPage />} />
          </Routes>
        </Router>
        <footer className="mt-8">
        </footer>
      </div>
    </>
  );
}

export default App;
