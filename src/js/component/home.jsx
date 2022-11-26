import React, { useState } from "react";
import Navbar from './navbar.jsx'
import Card from './card.jsx'
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
/*
<button onClick={() => {
				setCards([...cards, {img: { src: "https://picsum.photos/seed/12/200/150", alt: "Image" }, btn: { href: "#", text: "Click here" }, title: "Card Title", text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
				}])
			}}>Añadir tarjeta</button>
*/
//create your first component
const Home = () => {
	const navbarItems = [
		{ href: "#", text: "Home", active: true },
		{ href: "#", text: "Features" },
		{ href: "#", text: "Price" },
		{ href: "#", text: "Contact" }
	];
	const [cards, setCards] = useState([
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

			<h1 className="text-center mt-5">Hello Rigo!</h1>

			<div className="container justify-content-center align-items-center">
				<div className="row">
					<div className="col"><Jumbotron /></div>

				</div>
				<div className="row">
					<div className="col d-flex align-items-center flex-md-row flex-column  justify-content-md-between  mt-3">
						{cards.map((card, index) => {
							return (
								<Card key={index} button={card.btn} img={card.img} title={card.title} text={card.text} />
							)
						})}
					</div>


				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
