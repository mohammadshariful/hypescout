import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./shared/Footer";
const App = () => {
  return (
    <div className="bg-secondary h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
