// import Navbar from "./Navbar";
// import Home from "./Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Create from "./Create";
// import BlogDetails from "./BlogDetails";
// import NotFound from "./NotFound";
// import Uploadphoto from "./uploadphoto";
// import Contact from "./Contact";
// // import Blog from "./Blog";
// function App() {
// // const cors = require("cors");
// // app.use(cors());
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Routes>
//             <Route exact path='/'>
//               <Home />
//             </Route>
//             <Route path='/create'>
//               <Create />
//             </Route>
//             <Route path='/BlogDetails'>
//               <BlogDetails/>
//             </Route>
//             <Route path='/uploadphoto'>
//               <Uploadphoto />
//             </Route>
//             <Route path='/Contact'>
//               <Contact />
//             </Route>
//             {/* <Route path="/Blog">
//               <Blog />
//             </Route> */}
//             <Route path='*'>
//               <NotFound />
//             </Route>
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import Uploadphoto from "./uploadphoto";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/BlogDetails/:id" element={<BlogDetails />} />
            <Route path="/uploadphoto" element={<Uploadphoto />} />
            <Route path="/Contact" element={<Contact />} />
            {/* <Route path="/Blog" element={<Blog />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
