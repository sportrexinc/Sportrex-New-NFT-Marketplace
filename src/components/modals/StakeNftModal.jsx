import * as React from "react";
import Box from "@mui/material/Box";
import "./modal.css";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaTimesCircle } from "react-icons/fa";
import demo from '../../assets/demo-stake.svg'
import ActionBtn from '../Button/ActionBtn'

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

    width: 500,
  },
  bgcolor: "#0E1648",
  border: "none",
  outline: "none",
  boxShadow: 70,
  zIndex: 20,
};

export default function StakeNftModal({ open, handleClose }) {
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
          <div className="w-full flex flex-col rounded-[16px] p-8 z-20 ">
            <div className=" flex justify-end items-center">
              <div className="w-full flex justify-between lg:w-8/12 items-center ">
                <p className="grad-text semibold text-2xl">Stake NFT</p>
                <FaTimesCircle
                  onClick={handleClose}
                  className="text-white text-2xl cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-8 flex space-x-8">
              <div className="w-4/12 ">
                <img src={demo} alt="demo" className="w-full h-auto" />
              </div>
              <div className="w-7/12 flex flex-col justify-center">
                <p className="text-white semibold text-xl ">
                  Grafitti Monstr #34454
                </p>
                <div className="flex items-center space-x-2 mt-5 ">
                  <p className="text-yellow text-lg regular">0.0532 SPT</p>
                  <p className="text-white text-md regular ">$15,000</p>
                </div>
              </div>
              </div>
              <div className="flex w-full items-center justify-between mt-6">
                <p className="text-xl text-white semibold">Staking Period</p>
                <p className="text-xl text-yellow semibold">6 Months</p>
              </div>
              <div className="flex w-full items-center justify-between mt-6">
                <p className="text-xl text-white semibold">Staking Earning</p>
                <p className="text-xl text-yellow semibold">0.03555 SPT</p>
              </div>
              <div className="flex justify-center mt-6">
                <p className="text-md text-grey-800 text-center semibold">1 SPT = $1000</p>
              </div>
              <div className="w-10/12 mx-auto mt-6">
                <ActionBtn action={handleClose} name="Stake now" />
              </div>
            </div>
          
        </Box>
      </Modal>
    </div>
  );
}
