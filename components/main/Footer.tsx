import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]  ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <a
              href="https://github.com/ArmanPayandeh"
              className="cursor-pointer z-[20] "
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer z-[10]">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </a>
            <a href="" className="cursor-pointer z-[20] ">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/arman.payandeh/?hl=en"
              className="cursor-pointer z-[20] "
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaYoutube />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </a>
            <a
              href=""
              className="cursor-pointer z-[20] "
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
            </a>
            <a href="https://www.linkedin.com/in/arman-payandeh-187148352/" className="cursor-pointer z-[20] ">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a href="" className="cursor-pointer z-[20] ">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Become Sponsor</span>
              </p>
            </a>
            <a
              href="https://github.com/ArmanPayandeh"
              className="cursor-pointer z-[20] "
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Learning about me</span>
              </p>
            </a>{" "}
            <a href="" className="cursor-pointer z-[20] ">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">NexGenWeb3.com</span>
              </p>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; arman.payandeh.2025@gmail.com Dev 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
