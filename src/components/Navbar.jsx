import logo from "../assets/logo.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import menu from "../assets/icon-menu.svg";
import { useState } from "react";
import ScrollingMenuFeatures from "./ScrollingMenuFeatures";
import ScrollingMenuCompany from "./ScrollingMenuCompany";
import MenuMobile from "./MenuMobile";
const Navbar = () => {
  const [toggleFeatures, setToggleFeatures] = useState(false);
  const [toggleCompany, setToggleCompany] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);

  const handletoggleFeatures = () => {
    if (toggleCompany) {
      setToggleCompany(false);
      setToggleFeatures(true);
    } else {
      setToggleFeatures(!toggleFeatures);
    }
  };

  const handletoggleCompany = () => {
    if (toggleFeatures) {
      setToggleFeatures(false);
      setToggleCompany(true);
    } else {
      setToggleCompany(!toggleCompany);
    }
  };

  return (
    <nav className=" p-6 flex items-center justify-between">
      <img src={logo} alt="/" />
      <div className="w-full hidden lg:flex justify-between items-center">
        <ul className="flex items-center ml-12">
          <li className={styles.li} onClick={handletoggleFeatures}>
            Features{" "}
            <span className="ml-2">
              <img src={arrowDown} alt="/" />
            </span>
          </li>
          {toggleFeatures && (
            <div className="fixed top-16 left-16">
              <ScrollingMenuFeatures />
            </div>
          )}
          <li className={styles.li} onClick={handletoggleCompany}>
            Company{" "}
            <span className="ml-2">
              <img src={arrowDown} alt="/" />
            </span>
          </li>
          {toggleCompany && (
            <div className="fixed top-16 left-64">
              <ScrollingMenuCompany />
            </div>
          )}
          <li className={styles.li}>Careers</li>
          <li className={styles.li}>About</li>
        </ul>

        <div className="flex items-center">
          <button className={styles.li}>Login</button>
          <button className="text-[#696969] hover:text-black border border-black rounded-xl py-2 px-5 cursor-pointer">
            Register
          </button>
        </div>
      </div>
      {/* MOBILE PARTIE */}
      <div className="lg:hidden" onClick={() => setToggleButton(!toggleButton)}>
        {!toggleButton && <img src={menu} alt="" />}
      </div>
      <MenuMobile
        toggleButton={toggleButton}
        setToggleButton={setToggleButton}
        handletoggleCompany={handletoggleCompany}
        handletoggleFeatures={handletoggleFeatures}
        toggleFeatures={toggleFeatures}
        toggleCompany={toggleCompany}
      />
    </nav>
  );
};

const styles = {
  li: "text-[#696969] mr-10 flex items-center hover:text-black cursor-pointer",
};
export default Navbar;
