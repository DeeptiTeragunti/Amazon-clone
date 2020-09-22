import React, { useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import sample from "./sample.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  const Pricing = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  };
  return (
    <div className="home">
      {/*For Home page ad*/}
      <div className="home__container">
        <video
          className="home__video"
          autoPlay
          loop
          muted
          poster="http://beingcovers.com/media/facebook-cover/Call-Of-Duty-Black-Ops-Facebook-Covers-1254.jpeg"
        >
          <source src={sample} type="video/mp4" />
        </video>
        {/*
        <img
          className="home__image"
          src="https://i.pinimg.com/564x/5b/ff/5f/5bff5f2a8799026d964e0d6922188e41.jpg"
          alt=""
        />*/}
        ]{/*For products on home page*/}
        {/*First Line*/}
        <div className="home__row">
          <Product
            id="712890231"
            title="Ruz Star Wars Darth Vader Backpack Bag - Not Machine Specific "
            price={30}
            image="https://images-na.ssl-images-amazon.com/images/I/81BCN4TEG8L._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="910293910"
            title="PlayStation 4 Pro 1TB Console "
            price={350}
            image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="727271911"
            title="Oculus Quest All-in-one VR Gaming Headset – 64GB "
            price={697.5}
            image="https://images-na.ssl-images-amazon.com/images/I/51odsYyURHL._AC_SY400_.jpg"
            rating={5}
          />
        </div>
        {/*Second Line*/}
        <div className="home__row">
          <Product
            id="121721728"
            title="Xbox Wireless Controller - Black "
            price={59}
            image="https://images-na.ssl-images-amazon.com/images/I/41LO2OX6pRL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="10909080707"
            title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red "
            price={44}
            image="https://images-na.ssl-images-amazon.com/images/I/81L9+4dTIgL._AC_SY400_.jpg"
            rating={4}
          />
        </div>
        {/*Third Line*/}
        <div className="home__row">
          <Product
            id="288382832"
            title="World of Warcraft Battle for Azeroth - PC Standard Edition "
            price={300}
            image="https://images-na.ssl-images-amazon.com/images/I/81feWhChfIL._AC_SY400_.jpg"
            rating={4}
          />

          <Product
            key="5"
            id="74646746747641"
            title="Darksiders Genesis - Nephilim Edition - PC Nephilim Edition "
            price={379}
            image="https://images-na.ssl-images-amazon.com/images/I/61By0A78n+L._AC_SY400_.jpg"
            rating={4}
          />

          <Product
            key="6"
            id="7102938271"
            title="Sid Meier's Civilization VI - PC "
            price={21}
            image="https://images-na.ssl-images-amazon.com/images/I/51P8dInCuhL._AC_SY400_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
