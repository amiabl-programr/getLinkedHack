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

import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* hero */}
      <div className=" bg-background-col text-white">
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
                Hackathon <span>1.0</span>
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

          <Button />
        </div>
      </section>

      {/* faq section*/}
      <section
        className="bg-[#140D27] flex flex-col lg:flex-row items-center justify-center
        text-white text-center gap-[58px] lg:gap-[109px] pt-[29px] pb-[75px]
         lg:pt-[62px] lg:pb-[78px]"
      >
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

          <Button />
        </div>

        <div>
          <img src={judging_criteria} alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
