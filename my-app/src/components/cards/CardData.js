import image1 from "../../Assets/images/image-1.avif";
import image2 from "../../Assets/images/image-2.avif";
import image3 from "../../Assets/images/image-3.jpg";
import staricon from "../../Assets/images/star.png";

const CardData = () => {
  return [
    {
      id: 1,
      cardimg: image1,
      staricon: staricon,
      stats: {
        rating: 5.0,
        reviewCount: 6,
      },
      location: ".Online",
      price: 136,
      title: "Life Lessons with Katie Zaferes",
      openSpots: 0,
    },
    {
      id: 2,
      cardimg: image2,
      staricon: staricon,
      stats: {
        rating: 5.0,
        reviewCount: 30,
      },
      location: ".Online",
      price: 125,
      title: "Learn Wedding Photography",
      openSpots:27,
    },

    {
      id: 3,
      cardimg: image3,
      staricon: staricon,
      stats: {
        rating: "4.8",
        reviewCount: "2",
      },
      location: ".Norway",
      price: "50",
      title: "Group Mountain Biking",
      openspots:3,
    },
  ];
};

export default CardData;
