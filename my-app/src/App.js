import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/main";
import Cardcontent from "./components/cards";
import CardData from "./components/cards/CardData";
import "./styles/index.css";

function App() {
  const cardData = CardData();
  const cards = cardData.map((item) => {
    return (
      <>
        <Cardcontent
          key={item.id}
          img={item.cardimg}
          staricon={item.staricon}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          openSpots={item.openSpots}
        />
      </>
    );
  });

  return (
    <>
      <Navbar />
      <Main />
      <div className="cardsData">
      {cards}
      </div>
    </>
  );
}

export default App;
