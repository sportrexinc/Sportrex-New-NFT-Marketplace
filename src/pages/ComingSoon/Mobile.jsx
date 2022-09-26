import React,{useState,useEffect,useRef} from "react";
import "./ComingSoon.css";
import sound from "../../assets/coming-soon/background-sound.mpeg";
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";

import ResponseModal from "./Modal";
import { FaCopyright } from "react-icons/fa";

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
const MobileComingSoon = () => {
  const audioRef = useRef();
  const [play, setPlay] = useState(false);

  
   const [open, setOpen] = useState();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPlay(true);
  //   }, 5000);
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
    <div className=" md:hidden w-full min-h-screen coming-soon-mobile relative overflow-x-hidden  flex justify-center items-center">
      <ResponseModal open={open} handleClose={handleClose} />

      <div className="coming-overlay ">
        <div className=" mx-auto flow-hide h-screen">
          <div className="w-full flex flex-col items-center justify-center px-4 mt-10">
            <div className="flex justify-between w-full items-center">
              <div className="w-[150px] h-auto ">
                <img src={logo} alt="logo" className="w-full h-auto" />
              </div>
              <audio
                // controls
                loop
                autoPlay
                muted={!play}
                className="opacity-0"
                ref={audioRef}
              >
                <source src={sound} type="audio/mpeg" />
              </audio>
              <div className="flex  items-center space-x-2">
                <a
                  href="https://media.publit.io/file/SPORTREX-WHITE-PAPER.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white regular cursor-pointer text-md"
                >
                  Whitepaper
                </a>

                <span
                  className="grad-bg w-8 h-8 grid place-items-center rounded-full text-white text-xl cursor-pointer"
                  onClick={() => setPlay(!play)}
                >
                  {play ? <AiOutlineAudio /> : <AiOutlineAudioMuted />}
                </span>
              </div>
            </div>

            <h1 className="text-white text-center text-[34px] mt-10 bold px-4">
              Anticipate
              <span className="coming-soon-text ml-2">
                Sportrex NFT MarketPlace
              </span>
            </h1>
            <div className="flex flex-col">
              <p className="text-[#f1f1f1] mt-2 w-full px-[22px] mx-auto text-center text-[18px] regular leading-[25px] ">
                Unlocking seamless access to creators, entertainers, and artists
                to access the most amazing NFT deals for all categories of users
                with VR/AR experience. <span className="logo-svg"></span>
              </p>
           
            </div>

            <div className="mt-5 w-full ">
              <div className="2xl:w-5/12 w-10/12 mx-auto flex items-center bg-[#152139] h-16 rounded-[20px] ">
                <input
                  type="text"
                  className="w-full pl-2 pr-2 py-1 bg-transparent placeholder:text-center placeholder:text-grey-300 outline-none border-none regular text-white placeholder:text-md"
                  placeholder=" Enter your email or Ens address"
                />
              </div>
              <p
                className="coming-soon-btn w-10/12 h-16 mx-auto  rounded-[20px] cursor-pointer text-white bold text-[18px] text-center flex justify-center items-center mt-1 "
                onClick={() => setOpen(true)}
              >
                Get Notified
              </p>
              <p className="text-center mb-3 text-md text-white regular">
                **Notify me when website launch**
              </p>

              <div className="flex flex-col items-center mt-10">
                <h1 className="text-white text-[16px] text-center bold w-full">
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
                            className="w-8 h-auto"
                          />
                        </abbr>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-12 flex space-x-2 items-center justify-center mb-12">
              <FaCopyright className="text-white regular text-[24px]" />
              <p className="text-white bold text-[14px]">
                2022 Sportrex Inc. All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileComingSoon;
