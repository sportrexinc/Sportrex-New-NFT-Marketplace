import * as React from "react";
import Box from "@mui/material/Box";
import "./modal.css";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaTimes } from "react-icons/fa";
import coinbase from "../../assets/connect/coinbase.png";
import gamerswallet from "../../assets/connect/gamers-wallet.png";
import metamask from "../../assets/connect/metamask.png";
import walletconnect from "../../assets/connect/walletconnect.png";
import trustwallet from "../../assets/connect/trustwallet.png";



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
    
    width: 485,
  },
  bgcolor: "#0E1648",
  border: "none",
  outline: "none",
  boxShadow: 70,
  
};

export default function ConnectModal({
  open,
  handleClose,
 
}) {
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
          <div className="w-full flex flex-col rounded-[16px] ">
            <div className="div connect-bg ">
              <h1 className="text-white text-center bold text-[22px] ">
                Connect to wallet
              </h1>
            </div>
            <div className="w-full bg-blue-card px-4 flex flex-col space-y-3 mt-4 rounded-[16px]">
              <div className="w-9/12 mx-auto flex flex-col pb-4">
                <p className="text-center text-base bold text-white mb-9">Connect to your wallet to create an account and start  trading NFTs</p>
                <button className="outline-none border-none mb-4">
                  <img src={gamerswallet} alt="gamerswallet" className="w-full" />
                </button>
                <button className="outline-none border-none mb-4">
                  <img src={metamask} alt="metamask" className="w-full" />
                </button>
              <button className="outline-none border-none mb-4">
                <img src={coinbase} alt="coinbase" className="w-full" />
                </button>
                <button className="outline-none border-none mb-4">
                  <img src={walletconnect} alt="walletconnect" className="w-full" />
                </button>
                <button className="outline-none border-none mb-4">
                  <img src={trustwallet} alt="trustwallet" className="w-full" />
                </button>

            </div>
            </div>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
