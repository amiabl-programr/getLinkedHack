import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";
import Underline from "./assets/curved_underline.png";
import hero_img from "./assets/hero_img.png";
// import lensFlare from "./assets/Purple-Lens-Flare-PNG.png";
import blueEffect from "./assets/blue-effect.png";
import big_idea from "./assets/The big idea.png";
import rules from "./assets/rules.png";
import judging_criteria from "./assets/judging.png";
import faq from "./assets/faq-img.png";
import gold_medal from "./assets/gold_medal.png";
import bronze_medal from "./assets/bronze_medal.png";
import silver_medal from "./assets/silver_medal.png";
import main_prize from "./assets/main-prize.png";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* hero */}
      <div className=" bg-background-col text-white" id="hero">
        <div className="relative max-w-[1149px] mx-auto">
          <div className=" absolute pr-2 lg:pr-[55px] right-0">
            <p className="font-bold text-base italic">
              Igniting a Revolution in HR Innovation
            </p>
            <img
              src={Underline}
              className="w-[115px] lg:w-auto ml-auto"
              alt="underline-img"
            />
          </div>
        </div>

        {/* get linked */}
        <div
          className="  flex flex-col
       lg:flex-row justify-center items-center pt-9"
        >
          <div className="text-center lg:text-left mt-10 lg:mt-0">
            <div>
              <h1>getlinked Tech</h1>
              <h1>
                Hackathon{" "}
                <span className=" text-tet-col font-clashDisplay">1.0</span>
                <div className="inline">
                  <img src="" alt="" />
                </div>
              </h1>
            </div>
            <p className="mt-[9px] mb-6 w-[264px]">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Button />

            {/* timer */}
            <div className="flex justify-center  lg:justify-start gap-4 text-center ">
              <p>
                00<span>H</span>
              </p>
              <p>
                00 <span>M</span>
              </p>
              <p>
                00 <span>S</span>
              </p>
            </div>
          </div>

          {/* image */}
          <div className="relative mt-3 lg:mt-0">
            <img src={blueEffect} className="absolute bottom-0" alt="" />
            <img src={hero_img} className="lg:w-[600px]" alt="" />
          </div>
        </div>
      </div>

      {/* intro section */}
      <section
        className="bg-[#140D27] flex flex-col lg:flex-row items-center justify-center
        text-white text-center gap-[58px] lg:gap-[109px] pt-[29px] pb-[75px]
         lg:pt-[62px] lg:pb-[78px]"
      >
        <div>
          <img src={big_idea} alt="" />
        </div>

        <div className="max-w-[535px] lg:text-left">
          <div>
            <h2 className="">Introduction to getlinked</h2>
            <h2 className=" text-tet-col">tech Hackathon 1.0</h2>
          </div>
          <p className="mt-2 lg:mt-4">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </div>
      </section>

      {/* rules and guidelines section */}
      <section
        className="bg-[#140D27] flex flex-col lg:flex-row-reverse items-center justify-center
        text-white text-center gap-[58px] lg:gap-[109px] pt-[29px] pb-[75px]
         lg:pt-[62px] lg:pb-[78px]"
      >
        <div>
          <img src={rules} alt="" />
        </div>

        <div className="max-w-[535px] lg:text-left">
          <div>
            <h2 className="">Rules and</h2>
            <h2 className=" text-tet-col">Guidelines</h2>
          </div>
          <p className="mt-2 lg:mt-4">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </div>
      </section>

      {/* judging criteria */}
      <section
        className="bg-[#140D27] flex flex-col lg:flex-row items-center justify-center
        text-white text-center gap-[58px] lg:gap-[109px] pt-[29px] pb-[75px]
         lg:pt-[62px] lg:pb-[78px]"
      >
        <div>
          <img src={judging_criteria} alt="" />
        </div>

        <div className="max-w-[535px] lg:text-left">
          <div>
            <h2 className="">Judging Criteria</h2>
            <h2 className=" text-tet-col">Key attributes</h2>
          </div>
          <div className="mt-4 lg:mt-[21px] flex flex-col gap-3 lg:gap-6">
            <p>
              <span>Innovation and Creativity:</span> Evaluate the uniqueness
              and creativity of the solution. Consider whether it addresses a
              real-world problem in a novel way or introduces innovative
              features.
            </p>
            <p>
              <span>Functionality:</span> Assess how well the solution works.
              Does it perform its intended functions effectively and without
              major issues? Judges would consider the completeness and
              robustness of the solution.
            </p>
            <p>
              <span>Impact and Relevance: </span> Determine the potential impact
              of the solution in the real world. Does it address a significant
              problem, and is it relevant to the target audience? Judges would
              assess the potential social, economic, or environmental benefits.
            </p>
            <p>
              <span> Technical Complexity: </span> Evaluate the technical
              sophistication of the solution. Judges would consider the
              complexity of the code, the use of advanced technologies or
              algorithms, and the scalability of the solution.
            </p>
            <p>
              <span> Adherence to Hackathon Rules: </span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
          </div>

          <Button className="mt-" />
        </div>
      </section>

      {/* faq section*/}
      <section
        className="bg-[#140D27] flex flex-col lg:flex-row items-center justify-center
        text-white text-center gap-[58px] lg:gap-[109px] pt-[29px] pb-[75px]
         lg:pt-[62px] lg:pb-[78px]"
        id="faq"
      >
        <div className="max-w-[535px] lg:text-left">
          <div>
            <h2 className="">Frequently Ask</h2>
            <h2 className=" text-tet-col">Question</h2>
            <p>
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
          </div>
          <div className="mt-4 lg:mt-[21px] flex flex-col gap-3 lg:gap-6">
            <div className="flex gap-3 justify-between border-tet-col border-b-[1px] pb-3">
              <p>Can I work on a project I started before the hackathon?</p>
              <span className=" text-tet-col">+</span>
            </div>
            <div className="flex gap-3 justify-between border-tet-col border-b-[1px] pb-3">
              <p>What happens if I need help during the hackathon?</p>
              <span className=" text-tet-col">+</span>
            </div>
            <div className="flex gap-3 justify-between border-tet-col border-b-[1px] pb-3">
              <p>What happens if I don&apos;t have an idea for a project?</p>
              <span className=" text-tet-col">+</span>
            </div>
            <div className="flex gap-3 justify-between border-tet-col border-b-[1px] pb-3">
              <p>Can I join a team or do I have to come with one?</p>
              <span className=" text-tet-col">+</span>
            </div>
            <div className="flex gap-3 justify-between border-tet-col border-b-[1px] pb-3">
              <p>What happens after the hackathon ends</p>
              <span className=" text-tet-col">+</span>
            </div>
            <div className="flex gap-3 justify-between border-tet-col border-b-[1px] pb-3">
              <p>Can I work on a project I started before the hackathon?</p>
              <span className=" text-tet-col">+</span>
            </div>
          </div>
        </div>

        <div>
          <img src={faq} alt="" />
        </div>
      </section>

      {/* timeline */}
      <section className="text-white">
        <div className="text-center">
          <h2>Timeline</h2>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
      </section>

      {/* prizes and reward */}
      <section className="text-white pt-[74px]">
        <div className=" max-w-7xl">
          <div className="flex justify-end ">
            <div className="invisible"></div>
            <div className="text-center lg:text-left ">
              <div>
                <h2>Prizes and</h2>
                <h2 className="text-tet-col">Rewards</h2>
              </div>
              <p>
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center lg:flex-row lg:items-end
         justify-center gap-20 lg:gap-5"
        >
          <img src={main_prize} alt="" />

          {/* prizes */}
          <div className="flex gap-4 items-center text-center text-white">
            {/* silver */}
            <div className="silver">
              <img src={silver_medal} className=" -mt-[30%]" alt="" />
              <div>
                <p>
                  2nd <br />
                  Runner
                </p>
                <p className="font-bold text-sm lg:text-[32px]">N300,000</p>
              </div>
            </div>

            <div className="gold">
              <img src={gold_medal} className=" -mt-[30%]" alt="" />
              <div>
                <p>
                  1st <br />
                  Runner
                </p>
                <p className="font-bold text-sm lg:text-[32px]">N400,000</p>
              </div>
            </div>

            <div className="bronze">
              <img src={bronze_medal} className=" -mt-[30%]" alt="" />
              <div>
                <p>
                  3rd <br />
                  Runner
                </p>
                <p className="font-bold text-sm lg:text-[32px]">N150,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners and Sponsors */}
      <section></section>

      {/* Privacy Policy and Terms */}
      <section></section>
      <Footer />
    </>
  );
}

export default App;
