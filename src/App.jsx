import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() > 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      rotate: 0,
      scale: 1.2,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      rotate: 0,
      scale: 1.2,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      rotate: 0,
      scale: 0.7,
      x: "-50%",
      bottom: "-62.5%",
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagediv .text", { x: `${xMove * 0.4}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove });
    });
  }, [showContent]);

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-screen bg-black svg flex items-center justify-center overflow-hidden">
        {/* Splash Mask */}
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[180px] sm:text-[220px] md:text-[250px]"
                  fill="white"
                  style={{ fontFamily: 'Arial Black' }}
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full h-full overflow-hidden rotate-[-10deg] scale-[1.7] sm:rotate-[-8deg] sm:scale-[1.5] md:rotate-[-5deg] md:scale-[1] transition-all duration-500">
          {/* Landing Section */}
          <section className="landing relative w-full h-screen bg-black overflow-hidden">
            <nav className="navbar absolute top-0 left-0 w-full py-6 px-4 sm:py-8 sm:px-8 md:py-10 md:px-10 z-20">
              <div className="logo flex items-center gap-4 sm:gap-5 md:gap-6">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-6 h-0.5 sm:w-8 md:w-10 bg-white"></div>
                  <div className="line w-5 h-0.5 sm:w-7 md:w-8 bg-white"></div>
                  <div className="line w-4 h-0.5 sm:w-5 md:w-5 bg-white"></div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl text-white">Rockstar</h3>
              </div>
            </nav>

            <div className="imagediv relative w-full h-full">
              <img
                className="absolute sky top-0 left-0 w-full h-full object-cover transform scale-[1.2] sm:scale-[1.3] md:scale-[1.5] rotate-[-20deg]"
                src="./sky.png"
                alt="Sky"
              />
              <img
                className="absolute bg top-0 left-0 w-full h-full object-cover transform scale-[1.5] sm:scale-[1.6] md:scale-[1.8] rotate-[-3deg]"
                src="./bg.png"
                alt="Background"
              />
              <div className="text absolute top-34 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                <h1 className="text-6xl sm:text-6xl md:text-8xl leading-none -ml-4 sm:-ml-6 md:-ml-8">grand</h1>
                <h1 className="text-6xl sm:text-6xl md:text-8xl leading-none ml-4 sm:ml-6 md:ml-8">theft</h1>
                <h1 className="text-6xl sm:text-6xl md:text-8xl leading-none -ml-4 sm:-ml-6 md:-ml-8">auto</h1>
              </div>
              <img
                className="absolute mb-[465px] sm:mb-0 character left-1/2 transform -translate-x-1/2 bottom-[-200%] sm:bottom-[-220%] md:bottom-[-250%] scale-[1.8] sm:scale-[2.2] md:scale-[2.7] rotate-[-20deg]"
                src="./girlbg.png"
                alt="Character"
              />
            </div>

            <div className="btmbar absolute bottom-0 left-0 w-full py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 bg-gradient-to-t from-black to-transparent text-white flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <i className="ri-arrow-down-line text-xl sm:text-2xl md:text-2xl"></i>
                <h3 className="font-[Helvetica_Now_Display] text-sm sm:text-lg md:text-xl">Scroll Down</h3>
              </div>

              <img
                className="h-8 sm:h-12 md:h-14"
                src="./ps5.png"
                alt="PS5"
              />
            </div>
          </section>

          {/* Content Section */}
          <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center bg-black px-4 sm:px-6 md:px-10">
            <div className="limg w-full md:w-2/3 h-1/2 md:h-full relative mb-6 md:mb-0">
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[1] sm:scale-[1.05] md:scale-[1.1]"
                src="./imag.png"
                alt="Image"
              />
            </div>
            <div className="rg w-full md:w-[90%] text-white text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl">Still Running,</h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl">Not Hunting</h1>
              <p className="mt-6 sm:mt-8 md:mt-10 font-[Helvetica_Now_Display] text-sm sm:text-base md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                corrupti illo esse distinctio nihil, molestias modi consequatur.
                Tenetur molestias mollitia ad laborum iure architecto quo.
                Ratione odit voluptatum et suscipit?
              </p>
              <p className="mt-4 sm:mt-6 md:mt-7 font-[Helvetica_Now_Display] text-sm sm:text-base md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                corrupti illo esse distinctio nihil, molestias modi consequatur.
                Tenetur molestias mollitia ad laborum iure architecto quo.
                Ratione odit voluptatum et suscipit?
              </p>
              <button className="bg-yellow-500 mt-4 sm:mt-6 md:mt-8 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 text-black text-sm sm:text-base md:text-xl rounded">
                Download Now
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default App;
