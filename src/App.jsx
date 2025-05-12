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
      delay:-1,
      ease: "Expo.easeInOut"
    })

    gsap.to(".sky", {
      rotate: 0,
      scale: 1.2,
      duration: 2,
      delay:-.8,
      ease: "Expo.easeInOut"
    })

    gsap.to(".bg", {
      rotate: 0,
      scale: 1.2,
      duration: 2,
      delay:-.8,
      ease: "Expo.easeInOut"
    })

    gsap.to(".character", {
      rotate: 0,
      scale: 0.7,
      x:"-50%",
      bottom:"-62.5%",
      duration: 2,
      delay:-.8,
      ease: "Expo.easeInOut"
    })

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagediv .text", {
        x: `${xMove * 0.4}%`,
      });

      gsap.to(".sky", {
        x: xMove,
      });

      gsap.to(".bg", {
        x: xMove,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="flex items-center justify-center fixed svg top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
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
                  fontSize="250"
                  fill="white"
                  fontFamily="Arial Black"
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
        <div className="main w-full overflow-hidden rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-6 items-center">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-2xl text-white">Rockstar</h3>
              </div>
            </div>

            <div className="imagediv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt="Background"
              />
              <img
                className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt="Background"
              />
              <div className="text absolute flex flex-col gap-0 text-white top-7 left-1/2 -translate-x-1/2 ">
                <h1 className="text-8xl leading-none -ml-8">grand</h1>
                <h1 className="text-8xl leading-none ml-8">theft</h1>
                <h1 className="text-8xl leading-none -ml-8">auto</h1>
              </div>
              <img
                src="./girlbg.png"
                className="absolute character -bottom-[250%] left-1/2 -translate-x-1/2 scale-[2.7] rotate-[-20deg] "
              />
            </div>
            <div className="btmbar absolute text-white bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="ri-arrow-down-line text-2xl"></i>
                <h3 className="font-[Helvetica_Now_Display] text-xl">
                  Scroll Down
                </h3>
              </div>

              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[45px]"
                src="./ps5.png"
              />
            </div>
          </div>

          <div className="w-full h-screen flex items-center justify-center px-10 bg-black">
            <div className="cntr flex items-center  text-white w-full h-[80%] ">
              <div className="limg relative h-full w-2/3">
                <img
                  className="absolute scale-[1.1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  "
                  src="./imag.png"
                />
              </div>
              <div className="rg w-[90%]">
                <h1 className="text-5xl">Still Running,</h1>
                <h1 className="text-5xl">Not Hunting</h1>
                <p className="mt-10 font-[Helvetica_Now_Display] text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque corrupti illo esse distinctio nihil, molestias modi
                  consequatur. Tenetur molestias mollitia ad laborum iure
                  architecto quo. Ratione odit voluptatum et suscipit?
                </p>
                <p className="mt-7 font-[Helvetica_Now_Display] text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque corrupti illo esse distinctio nihil, molestias modi
                  consequatur. Tenetur molestias mollitia ad laborum iure
                  architecto quo. Ratione odit voluptatum et suscipit?
                </p>
                <button className="bg-yellow-500 mt-6 px-3 py-3 text-black text-xl">Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
