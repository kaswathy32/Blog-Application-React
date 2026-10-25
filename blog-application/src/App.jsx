import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import BlogDetails from "./Pages/BlogDetails";
import EditPost from "./Pages/EditPost";
import NotFound from "./Pages/NotFound";

import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;