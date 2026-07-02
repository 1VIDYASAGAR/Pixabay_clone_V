import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { fetchImageByCategory, setQuery } = useContext(PixabayContext);

  return (
    <>
      {}
      <div className="logo-container">
        <img
          src={logo}
          alt="V Images"
          className="logo"
        />
      </div>

      {}
      <div className="container text-center my-4">

        <button
          onClick={() => fetchImageByCategory("nature")}
          className="btn btn-outline-warning mx-2 my-2"
        >
          Nature
        </button>

        <button
          onClick={() => fetchImageByCategory("science")}
          className="btn btn-outline-primary mx-2 my-2"
        >
          Science
        </button>

        <button
          onClick={() => fetchImageByCategory("city")}
          className="btn btn-outline-info mx-2 my-2"
        >
          City
        </button>

        <button
          onClick={() => fetchImageByCategory("sports")}
          className="btn btn-outline-light mx-2 my-2"
        >
          Sports
        </button>

        <button
          onClick={() => fetchImageByCategory("computer")}
          className="btn btn-outline-warning mx-2 my-2"
        >
          Computer
        </button>

        <button
          onClick={() => fetchImageByCategory("education")}
          className="btn btn-outline-light mx-2 my-2"
        >
          Education
        </button>

        <button
          onClick={() => fetchImageByCategory("music")}
          className="btn btn-outline-secondary mx-2 my-2"
        >
          Music
        </button>

        <button
          onClick={() => fetchImageByCategory("travel")}
          className="btn btn-outline-success mx-2 my-2"
        >
          Travel
        </button>

      </div>

      {}
      <div className="container" style={{ maxWidth: "700px" }}>
        <input
          type="text"
          className="form-control bg-dark text-light"
          placeholder="Search Images..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
};

export default Navbar;