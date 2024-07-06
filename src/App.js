import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const routes = [
  //   {
  //     path:"/",
  //     element: <Home/>,
  //     // children: [
  //     //   {
  //     //     path: "/about",
  //     //     element: <About />,
  //     //   }]
  //   }
  //   ,
  //   {
  //     path: "/about",
  //     element: <About/>
  //   }
  // ];

  // const router = createBrowserRouter(routes);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
