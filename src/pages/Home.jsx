import { FaLongArrowAltRight } from "react-icons/fa";

export const Home = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-context">
                    <h1 className=" heading-xl">
                    Explore the World,One country at a time
                    </h1>
                    <p className="paragraph">
                    Discover the history,culture and beauty of every nation .Sort ,search and filter through detailed information about countries around the globe.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">Start exploring <FaLongArrowAltRight /></button>
                </div>
             <div className="hero-image">
                    <img src="./images/world.png" alt="world beauty" className="banner-image"/>
                </div>
            </div>
        </main>
    );
};