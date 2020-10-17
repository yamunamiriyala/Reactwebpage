import React from 'react';
import Header from './Header';
import bag from './images/bag.jpg';
import booktree from './images/booktree.jpg';
import bulb from './images/bulb.jpeg';
import moonastro from './images/moonastro.jpeg';

function Home() {
  return (
    <>
      <Header />
      <div className="content">
          <div className="imgContainer">
            <img src={bag} alt=""/>
            <img src={booktree} alt=""/>
          </div>
          <div className="imgContainer">
            <img src={bulb} alt=""/>
            <img src={moonastro} alt=""/>
          </div>
          
      </div>
    </>
  );
}

export default Home;
