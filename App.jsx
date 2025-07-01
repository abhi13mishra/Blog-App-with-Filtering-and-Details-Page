import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogHome from './projects/blog/BlogHome';
import PostDetails from './projects/blog/PostDetails';
import About from './pages/About';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;