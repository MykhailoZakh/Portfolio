import {useState} from "react";
import reactLogo from "./assets/react.svg";
import {Outlet} from "react-router-dom";
import "./App.css";
import FooterNav from "./components/Footer";
import NavBar from "./components/Nav";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <FooterNav />
    </>
  );
}

export default App;
