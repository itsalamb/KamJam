// home page (displays categories)
//all images need to be resized and links pointed to routers when completed

import React from "react";

const Home = () => {
    return (
        <>
          <div className="homepage">
              <h1 className="hometitle">Welcome to KamJam</h1>
              {/* replace test links below */}
              <a href="https://www.fender.com/en-US/electric-guitars/telecaster/jason-isbell-custom-telecaster/0140320364.html">
                  <img src="https://photos.app.goo.gl/Er5T4pYjd7yqyzns6" class="home-img"/>
                  <h2>Guitars</h2>
              </a>
              <a href="https://en.wikipedia.org/wiki/Drum">
                  <img src="https://imgur.com/uuqKFOR" class="home-img"/>
                  <h2>Drums</h2>
              </a>
              <a href="https://en.wikipedia.org/wiki/Orchestra">
                  <img src="https://www.conn-selmer.com/application/files/8815/0722/9036/18037.png" class="home-img"/>
                  <h2>Band and Orchestra</h2>
              </a>
              <a href="https://www.logitech.com/en-us/products/keyboards.html">
                  <img src="https://www.nordkeyboards.com/sites/default/files/files/products/nord-stage-3/images/models-stage3-88-revb.jpg" class="home-img"/>
                  <h2>Keyboards and Synths</h2>
              </a>
              <a href="https://www.boss.info/us/products/db-90/">
                  <img src="https://media.guitarcenter.com/is/image/MMGS7/213017000000000-00-2000x2000.jpg" class="home-img"/>
                  <h2>Accessories</h2>
              </a>
              <a href="https://en.wikipedia.org/wiki/The_Beatles">
                  <img src="https://www.yamaha.com/yamahavgn/PIM/Images/CEL-56P_540x540_735x735_d5dd4b16e6705e566f63a43cc7c0af46.jpg" class="home-img"/>
                  <h2>See All Products</h2>
              </a>
          </div>
        </>
    );
};

export default Home;