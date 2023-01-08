import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Section/Header/Header";
import Home from "./Pages/Home";
import SocialBar from "./Pages/SocialBar";
import Realisation from "./Pages/Realisation";
import BarInfluence from "./Pages/BarInfluence";


export default function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="SocialBar" element={<SocialBar />} />
          <Route path="Realisation" element={<Realisation />} />
          <Route path="BarInfluence" element={<BarInfluence />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
