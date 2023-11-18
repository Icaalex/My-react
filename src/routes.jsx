import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/gallery";
import Error404 from "./pages/error-404";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* if the route not specified by user */}
        <Route exact path="/" element={<Home />}></Route> 
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        <Route exact path="/gallery/:category" element={<Gallery />}></Route>
        {/* if the route or page does not exist then render this */}
        <Route exact path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>
  );
};
