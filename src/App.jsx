import "./App.css";
import History from "./Routes/History";
import Library from "./Routes/Library";
import My_reviews from "./Routes/My_reviews";
import Subscription from "./Routes/Subscription";
import Trending from "./Routes/Trending";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Nav from "./component/common/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./component/common/Footer";
import FAQs from "./component/common/FAQs";


function App() {
  const location=useLocation()
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/My_reviews" element={<My_reviews />} />
          <Route path="/History" element={<History />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/Trending" element={<Trending />} />
        </Routes>
        {location.pathname !== '/Subscription' && (< FAQs />)}
        {location.pathname !== '/Subscription' && (<Footer />)}
      </div>
    </>
  );
}

export default App;
