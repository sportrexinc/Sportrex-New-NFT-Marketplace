import React, { useState, useRef, useEffect } from "react";
import "./ComingSoon.css";
import sound from "../../assets/coming-soon/background-sound.mpeg";
import { FaCopyright } from "react-icons/fa";
import ResponseModal from "./Modal";
import MobileComingSoon from "./Mobile";
// import { useCountdown } from "./useCountdown";
import NormalLayout from "../../layouts/NormalLayout";
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
import logo from "../../assets/sportrex-logo.png";
import ComingImg from "../../assets/coming-soon/coming-soon-ocu.svg";
import telegram from "../../assets/icons/telegram.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import discord from "../../assets/icons/discord.png";
import twitch from "../../assets/icons/twitch.png";
import youtube from "../../assets/icons/youtube.png";
import medium from "../../assets/icons/medium.png";
import tiktok from "../../assets/icons/tiktok.png";

// import telegram from "./images/telegram.svg";
// import twitter from "./images/twitter.svg";
// import instagram from "./images/instagram.svg";
// import discord from "./images/discord.svg";
// import twitch from "./images/twitch.svg";
// import youtube from "./images/youtube.svg";
// import medium from "./images/medium.svg";
// import tiktok from "./images/tiktok.svg";
const linksArrayA = [
  {
    id: "1",
    link: "https://t.me/sportrexofficial",
    icon: telegram,
    name: "telegram",
  },
  {
    id: "2",
    link: "https://twitter.com/sportrexhq",
    icon: twitter,
    name: "twitter",
  },
  {
    id: "3",
    link: "https://instagram.com/sportrexofficial",
    icon: instagram,
    name: "instagram",
  },
  {
    id: "4",
    link: " https://discord.gg/sportrexofficial",
    icon: discord,
    name: "discord",
  },
  {
    id: "5",
    link: "https://www.twitch.tv/sportrexofficial",
    icon: twitch,
    name: "twitch",
  },
  {
    id: "10",
    link: "https://vm.tiktok.com/ZM8KVx1gb/",
    icon: tiktok,
    name: "tiktok",
  },
  {
    id: "8",
    link: "https://medium.com/@sportrex",
    icon: medium,
    name: "medium",
  },
  {
    id: "6",
    link: " https://www.youtube.com/channel/UCD-fhKSFYxU4em8mouCunEA",
    icon: youtube,
    name: "youtube",
  },
];
const ComingSoon = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsDesktop(true)
    }
    else {
      setIsDesktop(false);
    }
  
 
  }, [isDesktop])
  
  return (
    <>
      {
        isDesktop ? <Desktop /> : <MobileComingSoon />
      }
    
    </>
  );
};

export default ComingSoon;

const Desktop = () => { 
   const audioRef = useRef();
  // const [days, hours, minutes, seconds] = useCountdown("2022-10-10");
  const [open, setOpen] = useState();
  const [play, setPlay] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPlay(true);
  //   }, 4000);
  // }, []);

  useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    
  }, [play]);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="w-full min-h-screen bg-blue-commingSoon relative overflow-x-hidden  md:flex justify-center items-center hidden ">
        <ResponseModal open={open} handleClose={handleClose} />
        <div className="coming-soon-bg ">
          <div className="coming-overlay ">
            <div className="2xl:container 2xl:mx-auto max-w-[1440px] mx-auto flow-hide h-screen ">
              <NormalLayout>
                <div className="w-full flex flex-col  justify-center mt-10">
                  <div className="flex justify-between w-full items-center">
                    <div className="w-[181px] h-auto ">
                      <img src={logo} alt="logo" className="w-full h-auto" />
                    </div>
                    <audio
                      controls
                      loop
                      autoPlay
                      muted={!play}
                      className="opacity-0"
                      ref={audioRef}
                    >
                      <source src={sound} type="audio/mpeg" />
                    </audio>
                    <div className="flex space-x-8 items-center">
                      <a
                        href="https://media.publit.io/file/SPORTREX-WHITE-PAPER.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f1f1f1] hover:text-white regular cursor-pointer"
                      >
                        Whitepaper
                      </a>

                      <span
                        className="grad-bg w-10 h-10 grid place-items-center rounded-full text-white text-2xl cursor-pointer"
                        onClick={() => setPlay(!play)}
                      >
                        {play ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}
                      </span>
                    </div>
                  </div>

                  <h1 className="text-white text-start text-[48px] mt-20 bold w-5/12">
                    Anticipate
                    <span className="coming-soon-text ml-2">
                      Sportrex NFT MarketPlace
                    </span>
                  </h1>
                  <div className="flex flex-col">
                    <p className="text-[#f1f1f1] mt-4 w-5/12 2xl:w-5/12  text-start text-[20px] regular leading-9 pl-4 ">
                      Home to virtual assets, digital arts and collectibles.
                      Through our platform, users will be able to access the
                      most amazing NFT deals for all categories users with VR/AR
                      experience.
                      <span className="logo-svg"></span>
                    </p>
                  </div>

                  <div className="mt-10 w-full mb-20">
                    <div className="2xl:w-5/12  w-6/12  flex items-center bg-[#152139] h-16 rounded-[20px] ">
                      <input
                        type="text"
                        className="w-6/12 mx-auto pl-6 py-1 bg-transparent placeholder:text-[#999] placeholder:opacity-60 outline-none border-none regular text-white placeholder:text-[16px]"
                        placeholder=" Enter your email or ENS address "
                      />
                      <p
                        className="coming-soon-btn w-4/12 h-full rounded-[20px] cursor-wait text-white bold text-[20px] text-center flex justify-center items-center"
                        onClick={() => setOpen(true)}
                      >
                        Get Notified
                      </p>
                    </div>
                    <p className=" mt-2 text-sm text-white regular text-center 2xl:w-5/12  w-6/12">
                      **Notify me when website launch**
                    </p>

                    <div className="flex flex-col items-center mt-16">
                      <h1 className="text-white text-[20px] text-center bold">
                        Join the Sportrex community
                      </h1>
                      <div className="flex space-x-2 mt-4">
                        {linksArrayA.map((item, index) => {
                          return (
                            <a
                              href={item.link}
                              target="_blank"
                              key={index}
                              rel="noopener noreferrer"
                            >
                              <abbr title={`${item.name}`}>
                                <img
                                  src={item.icon}
                                  alt="icons"
                                  className="w-12 h-auto"
                                />
                              </abbr>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mt-16 flex space-x-2 items-center justify-center">
                      <FaCopyright className="text-white regular text-[14px]" />
                      <p className="text-white regular text-[14px]">
                        2022 Sportrex Inc. All right reserved
                      </p>
                    </div>
                  </div>
                </div>
              </NormalLayout>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
