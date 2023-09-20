import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";
import Underline from "./assets/curved_underline.png";
import hero_img from "./assets/hero_img.png";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* hero */}
      <div
        className=" bg-background-col text-white flex flex-col
       lg:flex-row justify-center items-center"
      >
        <div>
          <p>Igniting a Revolution in HR Innovation</p>
          <img src={Underline} alt="underline-img" />
        </div>
        <div>
          <div>
            <h2>getlinked Tech</h2>
            <h2>
              Hackathon <span>1.0</span>
            </h2>
          </div>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button />
        </div>
        <div>
          <img src={hero_img} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
