import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Name from "./Name";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import Services from "./Services";
import User from "./User";
import Search from "./Search";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact/name" element={<Name title='WWE' />} />
                <Route path="/services" element={<Services title='Service' />} />
                <Route path="/users/:fname/:lname" element={<User />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default App;