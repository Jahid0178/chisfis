import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Security/SignIn/SignIn";
import SignUp from "./Components/Security/SignUp/SignUp";
import Footer from "./Components/Shared/Footer/Footer";
import Navigation from "./Components/Shared/Navigation/Navigation";
import SingleDetails from "./Components/SingleDetails/SingleDetails";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import PrivateRoute from "./Components/Security/PrivateRoute/PrivateRoute";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route
              path="/viewDetails/:id"
              element={
                <PrivateRoute>
                  <SingleDetails />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
