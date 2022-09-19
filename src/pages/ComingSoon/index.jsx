import React from 'react'
import "./ComingSoon.css"
import MobileComingSoon from './Mobile';
import { useCountdown } from './useCountdown';
import logo from "../../assets/sportrex-logo.png";
import ComingImg from "../../assets/coming-soon/coming-soon-ocu.svg";
import telegram from "./images/telegram.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import discord from "./images/discord.svg";
import twitch from "./images/twitch.svg";
import youtube from "./images/youtube.svg";
import medium from "./images/medium.svg";
import tiktok from "./images/tiktok.svg";
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

   const [days, hours, minutes, seconds] = useCountdown("2022-10-10");
  return (
    <>
    <div className="w-full min-h-screen bg-blue-commingSoon relative overflow-x-hidden  md:flex justify-center items-center hidden ">
      <div className="coming-soon-bg ">
        <div className="2xl:container 2xl:mx-auto max-w-[1440px] mx-auto flow-hide h-screen">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-3/12 h-auto mt-20">
              <img src={logo} alt="logo" className="w-full h-auto" />
            </div>
            <div className="in w-full justify-center items-center">
              <h1 className="text-[64px] text-white mt-5 bold text-center">
                INTO THE{" "}
                <span className="coming-soon-text"> MARTKETPLACE </span>
              </h1>
            </div>
            <h1 className="text-white text-center text-[36px] mt-4 bold">
              Anticipate Sportrex NFT Marketplace
            </h1>
            <div className="flex flex-col">
              <p className="text-white mt-4 w-8/12 2xl:w-7/12 mx-auto text-center text-[24px] regular leading-9 ">
                A place to Buy, Sell, Stake and earn yield on the most liquid
                decentralized NFTs, and also view your NFTs in
              </p>
              <div className="flex justify-center  text-white text-[24px] items-center">
                VR/AR Mode
                <img src={ComingImg} alt="ocu" className="w-12 ml-2 " />
              </div>
            </div>

            <div className="mt-10 w-full mb-20">
              <div className="2xl:w-5/12  w-6/12 mx-auto flex items-center bg-[#152139] h-16 rounded-[20px] ">
                <input
                  type="text"
                  className="w-9/12 pl-8 pr-2 py-1 bg-transparent placeholder:text-grey-300 outline-none border-none regular text-white"
                  placeholder="please enter your email address"
                />
                <p className="coming-soon-btn w-3/12 h-full rounded-[20px] cursor-pointer text-white bold text-[20px] text-center flex justify-center items-center">
                  Notify me
                </p>
              </div>
              <p className="text-center mt-2 text-base text-white regular">
                **Notify me when website launch**
              </p>
              <div className="time flex flex-col items-center mt-10">
                <h1 className="text-white text-[28px] bold">Time remaining</h1>
                <div className="flex space-x-4 mt-4 ">
                  <div className="flex flex-col space-y-3">
                    <div className="boxo1">
                      <div className="boxoA grid items-center">
                        <p className="text-white bold text-[40px] text-center">
                          {days}
                        </p>
                      </div>
                    </div>
                    <p className="text-white bold text-2xl text-center">Days</p>
                  </div>
                  <p className="text-white bold text-[40px]">:</p>
                  <div className="flex flex-col space-y-3">
                    <div className="boxo1">
                      <div className="boxoA grid items-center">
                        <p className="text-white bold text-[40px] text-center">
                          {hours}
                        </p>
                      </div>
                    </div>
                    <p className="text-white bold text-2xl text-center">
                      Hours
                    </p>
                  </div>
                  <p className="text-white bold text-[40px]">:</p>
                  <div className="flex flex-col space-y-3">
                    <div className="boxo1">
                      <div className="boxoA grid items-center">
                        <p className="text-white bold text-[40px] text-center">
                          {minutes}
                        </p>
                      </div>
                    </div>
                    <p className="text-white bold text-2xl text-center">
                      Minutes
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center mt-20">
                <h1 className="text-white text-[28px] text-center bold">
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
            </div>
          </div>
        </div>
      </div>
      </div>
      <MobileComingSoon />
      </>
  );
}

export default ComingSoon
