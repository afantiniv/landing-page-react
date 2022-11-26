import React,{useState} from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const navbarItems = [
    { href: "#", text: "Home" },
    { href: "#", text: "Features" },
    { href: "#", text: "Pricing", active: true },
    { href: "#", text: "Contact" },
  ];
  const [cards, setCards]=useState([
    {
      img: { src: "https://picsum.photos/seed/12/200/150", alt: "Image" },
      btn: { href: "#", text: "Click here" },
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      img: { src: "https://picsum.photos/seed/122/200/150", alt: "Image" },
      btn: { href: "#", text: "Click here" },
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      img: { src: "https://picsum.photos/seed/1232/200/150", alt: "Image" },
      btn: { href: "#", text: "Click here" },
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      img: { src: "https://picsum.photos/seed/1422/200/150", alt: "Image" },
      btn: { href: "#", text: "Click here" },
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ])
  return (
    <div className="text-center">
      <Navbar items={navbarItems} />
      <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
		{cards.map((card, index)=>{
			return(
				<Card key={index} button={card.btn} img={card.img} title={card.title} text={card.text} />
			)
		})}
	  </div>
      <button onClick={()=>{
		setCards([...cards, {
			img: { src: "https://picsum.photos/seed/12/200/150", alt: "Image" },
			btn: { href: "#", text: "Click here" },
			title: "Card Title",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		  }])
	  }}>Añadir tarjeta</button>
      <p>
        Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        love!
      </p>
    </div>
  );
};

export default Home;
