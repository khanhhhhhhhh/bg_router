import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import AboutProduct from "./components/Page/AboutProduct";
import AboutUsers from "./components/Page/AboutUsers";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Page</Link>
        </li>
        <li>
          <Link to='/about'>About Page</Link>
          <ul>
            <li>
              <Link to='/about/aboutProduct'>About Product</Link>
            </li>
            <li>
              <Link to='/about/aboutUser'>About Users</Link>
            </li>
          </ul>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/about' element={<AboutPage />}>
          {/* Nested Router (Định tuyến lồng nhau) */}
          <Route path='aboutProduct' element={<AboutProduct />}></Route>
          <Route path='aboutUser' element={<AboutUsers />}></Route>
        </Route>

        {/* Lưu ý: Để router có path="*" để cuối cùng */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;