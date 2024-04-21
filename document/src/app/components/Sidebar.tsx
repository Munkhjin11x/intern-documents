"use client";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Logo from "../assets/Logo";
import Pinecone from "../assets/Pinecone";
import { graphql } from "../constant/graphql";
import { NX } from "../constant/nxMonorepo";
import { test } from "../constant/testing";
import { pr } from "../constant/pullreq";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const [showGraphQL, setShowGraphQL] = useState(false);
  const [showNX, setShowNx] = useState(false);
  const [showPr, setShowPr] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [activePath, setActivePath] = useState("");

  const toggleGraphQL = () => {
    setShowGraphQL(!showGraphQL);
  };
  const toggleNx = () => {
    setShowNx(!showNX);
  };
  const togglePr = () => {
    setShowPr(!showPr);
  };
  const toggleTest = () => {
    setShowTest(!showTest);
  };
  const renderIcon = (showSection: any) => {
    return showSection ? (
      <KeyboardArrowDownIcon sx={{ color: "#4ADF7E", height: "24px" }} />
    ) : (
      <ArrowForwardIosIcon sx={{ color: "#4ADF7E", height: "16px" }} />
    );
  };
  return (
    <div className=" h-[1000px]">
      <div className="flex  border-b-[1px] border-r-[1px] border-[#2F2F2F]  ">
        <div className="flex h-[64px] w-[299px] gap-2 justify-center items-center">
          <Logo />
          <Pinecone />
        </div>
      </div>
      <div className=" border-r-[1px] border-[#2F2F2F] h-[900px] ">
        <div className="text-white px-5 py-2 flex flex-col gap-[4px]">
          <p
            onClick={toggleGraphQL}
            className="cursor-pointer text-[15px] font-medium hover:bg-[#252525] rounded-sm"
          >
            {" "}
            {renderIcon(showGraphQL)}Graphql{" "}
          </p>
          {showGraphQL && (
            <ul className="flex flex-col gap-[2px] border-l-[1px] border-[#2F2F2F]">
              {graphql.map((e) => (
                <li
                  onClick={() => router.push(`${e.path}`)}
                  className="px-[27px] text-[14px] text-[#2F2F2F] hover:text-white cursor-pointer hover:bg-[#252525] ease-in-out duration-300"
                >
                  {e.title}{" "}
                  <ArrowForwardIosIcon
                    sx={{ color: "#4ADF7E", height: "16px" }}
                  />
                </li>
              ))}
            </ul>
          )}
          <p
            onClick={toggleTest}
            className="cursor-pointer text-[15px]  hover:bg-[#252525] font-medium"
          >
            {" "}
            {renderIcon(showTest)}Testing
          </p>
          {showTest && (
            <ul className="flex flex-col gap-[2px] border-l-[1px] border-[#2F2F2F]">
              {test.map((e) => (
                <li
                  onClick={() => router.push(`${e.path}`)}
                  className="px-[27px] cursor-pointer hover:bg-[#252525] text-[14px] text-[#2F2F2F] hover:text-white c ease-in-out duration-300"
                >
                  {e.title}{" "}
                  <ArrowForwardIosIcon
                    sx={{ color: "#4ADF7E", height: "16px" }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
