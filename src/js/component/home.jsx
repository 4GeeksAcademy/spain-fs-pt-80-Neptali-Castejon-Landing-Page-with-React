import React from "react";
import { Navbar } from "./navbar";
import { CardComponent } from "./card";
import { cardData, jumbotronData } from "../data";
import { JumboComponent } from "./jumbotron";
import { Footer } from "./footer";

const Home = () => {
    return (
        <>
            <Navbar/>
            <JumboComponent 
                title={jumbotronData.title}
                leadText={jumbotronData.leadText}
                additionalText={jumbotronData.additionalText}
                buttonText={jumbotronData.buttonText}
                buttonLink={jumbotronData.buttonLink}
            />
            <div className="container my-5">
                <div className="row g-3">
                    {cardData.map((el) => (
                        <CardComponent key={el.id} title={el.title} text={el.text} imageUrl={el.imageUrl} />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
