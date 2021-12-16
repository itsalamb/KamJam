import React from "react";
import { Link } from "react-router-dom";
import accTile from "./images/accpic2.png";
import bandTile from "./images/bandpic2.png";
import clusterTile from "./images/clusterpic2.png";
import drumTile from "./images/Drumspic2.png";
import guitarTile from "./images/guitarpic2.png";
import keysTile from "./images/keyspic2.png";

const Home = () => {
    return (
        <>
          <div className="homepage">
              <h1 className="product-title">Welcome to KamJam</h1>
              <div className="tileContainer">
              <div className="homeTiles">
                {/* guitars */}
                <Link to="/Guitars/products">
                <img src={guitarTile} className="singleTile"/>
                </Link>
                {/* drums */}
                <Link to="/Drums/products">
                <img src={drumTile} className="singleTile"/>
                </Link>
                {/* Band and orchestra */}
                <Link to="/Band/products">
                <img src={bandTile} className="singleTile"/>
                </Link>
                {/* keys and synths */}
                <Link to="/Keyboards/products">
                <img src={keysTile} className="singleTile"/>
                </Link>
                {/* Accesories */}
                <Link to="/Accessories/products">
                  <img src={accTile} className="singleTile"/>
                </Link>
                {/* all products */}
                <Link to="/products">
                <img src={clusterTile} className="singleTile"/>
                </Link>
              </div>
              </div>
          </div>
        </>
    );
};

export default Home;