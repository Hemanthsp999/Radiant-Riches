import { useEffect, useState } from "react";
import Plx from "react-plx";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import "./App.scss";
import logo from "../images/logo1.jpeg";
import logo1 from "../images/logo2.jpeg";
import menu from "../images/menu.png";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const parallaxData = [
    {
      start: 0,
      end: 400,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "scale",
        },
      ],
    },
  ];

  const fetchData = () => {
    setTimeout(() => {
      setItems([
        ...items,
        ...Array.from({ length: 5 }).map((_, i) => i + items.length + 1),
      ]);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <nav className="nav">
        <p style={{ textAlign: "center" }}>NextJs/ReactJs Assignment</p>
        <div className="nav-button">
          <button className="nav-hover" onClick={toggleDropdown}>
            <img src={menu} alt="..." className="menu" />
          </button>
          {showDropdown && (
            <div className="dropdown">
              <a href="#">Login</a>
            </div>
          )}
        </div>
      </nav>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading....</h4>}
      >
        <Plx parallaxData={parallaxData}>
          <div className="logo">
            <img
              src={logo}
              alt=".."
              style={{ width: "400px", padding: "5px" }}
            />
            <img src={logo1} alt=".." style={{ width: "400px" }} />
          </div>
        </Plx>
      </InfiniteScroll>
    </div>
  );
}

export default App;
