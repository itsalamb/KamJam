// home page (displays categories)
//all images need to be resized and links pointed to routers when completed

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
              <h1 className="hometitle">Welcome to KamJam</h1>
              <br/>
              <span className="rowOne">
                {/* guitars */}
                <Link to="/guitars/products">
                <img src={guitarTile} className="homepageTiles" row="rowOne"/>
                </Link>
                {/* drums */}
                <Link to="/drums/products">
                <img src={drumTile} className="homepageTiles" row="rowOne"/>
                </Link>
                {/* Band and orchestra */}
                <Link to="/band/products">
                <img src={bandTile} className="homepageTiles" row="rowOne"/>
                </Link>
              </span>
              <br/>
              <span class="rowTwo">
                {/* keys and synths */}
                <Link to="/keyboards/products">
                <img src={keysTile} className="homepageTiles" row="rowTwo"/>
                </Link>
                {/* Accesories */}
                <Link to="/accessories/products">
                  <img src={accTile} className="homepageTiles" row="rowTwo"/>
                </Link>
                {/* all products */}
                <Link to="/products">
                <img src={clusterTile} className="homepageTiles" row="rowTwo"/>
                </Link>
              </span>
              <br/>
          </div>
        </>
    );
};

export default Home;