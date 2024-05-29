import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import About from "./ui/About";
import ActionSection from "./ui/ActionSection";
import Brand from "./ui/Brand";
import Faq from "./ui/Faq";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import Support from "./ui/Support";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import ScamTracing from "./pages/ScamTracing";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/scamtracing" element={<ScamTracing />} />
            <Route path="/testimonial" element={<Testimonial />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
