import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburgur from "./Hamburgur";
import ProductDropDown from "./ProductDropDown";
import SearchBox from "./SearchBox";

const Navbar = () => {
  const styles = {
    textBlack: {
      position: "relative",
    },
    after: {
      content: "",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "2px",
      backgroundColor: "transparent",
      transition: "background-color 0.3s ease",
    },
    afterHover: {
      backgroundColor: "#0033FF",
    },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoveredProd, setIsHoveredProd] = React.useState(false);
  const [isHoveredSol, setIsHoveredSol] = React.useState(false);
  const [isHoveredPri, setIsHoveredPri] = React.useState(false);
  const [isHoveredLea, setIsHoveredLea] = React.useState(false);
  const [isHoveredCon, setIsHoveredCon] = React.useState(false);
  const [inputShow, setInputShow] = useState(false);
  const [inputShowMobile, setInputShowMobile] = useState(false);
  const [productDD, setProductDD] = useState(false);
  const [solDD, setSolDD] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setInputShowMobile(false);
  };

  return (
    <>
      <Hamburgur isMenuOpen={isMenuOpen} />
      {productDD || solDD ? <ProductDropDown /> : null}
      <SearchBox
        inputShowMobile={inputShowMobile}
        setInputShowMobile={setInputShowMobile}
      />
      <nav
        className={`z-10 max-h-24 h-[100px] outline-none flex items-center justify-around fixed top-0 w-full bg-[white] overflow-scroll ${
          isMenuOpen || inputShowMobile ? "" : "shadow-lg"
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-10 justify-center">
            <div className="w-40 h-8">
              <img
                src={
                  "https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1"
                }
                alt="Logo"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="hidden md:flex gap-x-5">
              <div
                style={styles.textBlack}
                onMouseEnter={() => {
                  setIsHoveredProd(true);
                }}
                onMouseLeave={() => {
                  setIsHoveredProd(false);
                }}
                className="text-black hover:text-[#0033FF] flex items-center hover:animate-pulse"
                onClick={() => {
                  setSolDD(false);
                  setProductDD((p) => !p);
                }}
              >
                <span>Products</span>
                {productDD ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                {isHoveredProd && (
                  <div style={{ ...styles.after, ...styles.afterHover }} />
                )}
              </div>
              <div
                style={styles.textBlack}
                onMouseEnter={() => {
                  setIsHoveredSol(true);
                }}
                onMouseLeave={() => setIsHoveredSol(false)}
                className="text-black hover:text-[#0033FF] flex items-center hover:animate-pulse"
                onClick={() => {
                  setProductDD(false);
                  setSolDD((p) => !p);
                }}
              >
                <span>Solutions</span>
                {solDD ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                {isHoveredSol && (
                  <div style={{ ...styles.after, ...styles.afterHover }} />
                )}
              </div>
              <div
                style={styles.textBlack}
                onMouseEnter={() => setIsHoveredPri(true)}
                onMouseLeave={() => setIsHoveredPri(false)}
                className="text-black hover:text-[#0033FF] flex items-center hover:animate-pulse"
              >
                <span>Pricing</span>

                {isHoveredPri && (
                  <div style={{ ...styles.after, ...styles.afterHover }} />
                )}
              </div>
              <div
                style={styles.textBlack}
                onMouseEnter={() => setIsHoveredLea(true)}
                onMouseLeave={() => setIsHoveredLea(false)}
                className="text-black hover:text-[#0033FF] flex items-center hover:animate-pulse"
              >
                <span>Learn</span>
                <RiArrowDropDownLine />
                {isHoveredLea && (
                  <div style={{ ...styles.after, ...styles.afterHover }} />
                )}
              </div>
              <div
                style={styles.textBlack}
                onMouseEnter={() => setIsHoveredCon(true)}
                onMouseLeave={() => setIsHoveredCon(false)}
                className="text-black hover:text-[#0033FF] flex items-center hover:animate-pulse"
              >
                <span>Contact</span>

                {isHoveredCon && (
                  <div style={{ ...styles.after, ...styles.afterHover }} />
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-0">
            <div className="relative md:hidden flex items-center gap-5">
              <BiSearch
                onClick={() => setInputShowMobile((p) => !p)}
                className="text-[20px]"
              />
              <button
                className="text-black text-[40px] focus:outline-none"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
              </button>
            </div>
            <div className={`hidden md:flex md:items-center md:gap-[10px]`}>
              <div className="flex items-center gap-5">
                <BiSearch onClick={() => setInputShow((p) => !p)} />
                {inputShow ? (
                  <input
                    type="text"
                    className="px-4 py-2 rounded-md focus:outline-none"
                    placeholder="Search"
                  />
                ) : (
                  ""
                )}
              </div>
              <button className="bg-white border-2 border-indigo-500 text-[#0033ff] hover:text-[white] hover:bg-[#0027cc] w-[71px] h-[60px]">
                Login
              </button>
              <button className="bg-[#0033ff] text-white hover:text-[#0033ff] hover:bg-white hover:border-2 border-indigo-600 w-[153px] h-[70px]">
                Start My Free Trial
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
      </nav>
    </>
  );
};

export default Navbar;
