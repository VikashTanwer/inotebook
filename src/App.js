import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/Notestate";

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
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
