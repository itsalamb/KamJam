// home page (displays categories)
//all images need to be resized and links pointed to routers when completed

import React from "react";
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
                {/* replace test links below */}
                {/* guitars */}
                <a href="/guitars/products">
                <img src={guitarTile} className="homepageTiles" row="rowOne"/>
                </a>
                {/* drums */}
                <a href="/drums/products">
                <img src={drumTile} className="homepageTiles" row="rowOne"/>
                </a>
                {/* Band and orchestra */}
                <a href="/band/products">
                <img src={bandTile} className="homepageTiles" row="rowOne"/>
                </a>
              </span>
              <br/>
              <span class="rowTwo">
                {/* keys and synths */}
                <a href="/keyboards/products">
                <img src={keysTile} className="homepageTiles" row="rowTwo"/>
                </a>
                {/* Accesories */}
                <a href="/accessories/products">
                  <img src={accTile} className="homepageTiles" row="rowTwo"/>
                </a>
                {/* all products */}
                <a href="/products">
                <img src={clusterTile} className="homepageTiles" row="rowTwo"/>
                </a>
              </span>
              <br/>
          </div>
        </>
    );
};

export default Home;