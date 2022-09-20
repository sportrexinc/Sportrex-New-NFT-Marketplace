import * as React from "react";
import Box from "@mui/material/Box";


import Modal from "@mui/material/Modal";
import { FaTimesCircle } from "react-icons/fa";


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


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#0E1648",
  width: 400,
  borderRadius: "15px",
  ["@media (min-width:780px)"]: {
    // eslint-disable-line no-useless-computed-key

    width: 600,
  },
  bgcolor: "#020733",
  border: "none",
  outline: "none",
  boxShadow: 70,
  zIndex: 20,
};

export default function ResponseModal({ open, handleClose }) {
  // const [value, setValue] = React.useState("");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-full flex flex-col rounded-[16px] p-8 z-20 bg-[#020733] ">
            <div className=" flex justify-end items-center">
              <div className="w-full flex justify-end lg:w-8/12 items-center ">
                <FaTimesCircle
                  onClick={handleClose}
                  className="text-white text-2xl cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-6 md:mt-10 flex space-x-8 justify-center items-center">
              <h1 className="w-10/12 md:w-8/12 text-[24px]  md:text-[36px] mx-auto text-center text-[#09ce35] bold">
                Email Recieved Successfully
              </h1>
            </div>

            <div className="flex flex-col items-center mt-8 md:mt-12">
              <h1 className="text-white  text-[20px] md:text-[28px] text-center bold">
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
                          className="w-8 md:w-12 h-auto"
                        />
                      </abbr>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
