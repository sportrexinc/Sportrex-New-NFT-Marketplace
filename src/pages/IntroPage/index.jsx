
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Loading = () => {
     const [index, setIndex] = useState(0);
     const history = useHistory();
     const lengthArray = [
       "0%",
       "10%",
       "20%",
       "30%",
       "40%",
       "50%",
       "60%",
       "70%",
       "80%",
       "90%",
       "100%",
     ];
     useEffect(() => {
       const interval = setInterval(() => {
         if (index === lengthArray.length - 1) {
           setIndex(0);
           history.push("/home");
         } else {
           setIndex(index + 1);
         }
       }, 400);
       return () => clearInterval(interval);
     }, [index]);
  return (
    <div className="loading-bg">
      <div className="  w-full h-screen flex justify-center flex-col items-center ">
        <div className="w-full h-36 ">
          <div className="bg-blue w-full flex justify-center items-center mb-12 sm:mb-24">
            <img src={logo} alt="sportrex_logo" width={326} height={54} />
          </div>
          <div
            className="bg-blue-btn h-[8px] w-full rounded-md transition-all duration-150 ease-linear"
            style={{
              width: lengthArray[index.toString()],
            }}
          />
        </div>
        <div className="flex justify-center items-center text-2xl text-white bold mt-10">
          Enter To Explore The Marketplace
        </div>
      </div>
    </div>
  );
}

export default Loading