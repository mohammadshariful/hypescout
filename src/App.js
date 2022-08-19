import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./shared/Footer";
import MenuBar from "./shared/Menubar";
const App = () => {
  return (
    <div className="bg-secondary">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
