import close from "../assets/icon-close-menu.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import ScrollingMenuFeatures from "./ScrollingMenuFeatures";
import ScrollingMenuCompany from "./ScrollingMenuCompany";

const MenuMobile = ({
  toggleButton,
  setToggleButton,
  handletoggleCompany,
  handletoggleFeatures,
  toggleCompany,
  toggleFeatures,
}) => {
  console.log(toggleButton);
  return (
    <>
      {toggleButton && (
        <div className="lg:hidden w-[250px] h-screen fixed right-0 bottom-0 bg-white p-6">
          <div
            className="fixed top-4 right-4"
            onClick={() => setToggleButton(!toggleButton)}
          >
            <img src={close} alt="/" />
          </div>
          <ul className="flex flex-col items-start mt-12 bg-white">
            <li className={styles.li} onClick={handletoggleFeatures}>
              Features{" "}
              <span className="ml-2">
                {toggleFeatures ? (
                  <img src={arrowUp} alt="/" />
                ) : (
                  <img src={arrowDown} alt="/" />
                )}
              </span>
            </li>
            {toggleFeatures && (
              <div>
                <ScrollingMenuFeatures />
              </div>
            )}
            <li className={styles.li} onClick={handletoggleCompany}>
              Company{" "}
              <span className="ml-2">
                {toggleCompany ? (
                  <img src={arrowUp} alt="/" />
                ) : (
                  <img src={arrowDown} alt="/" />
                )}
              </span>
            </li>
            {toggleCompany && (
              <div>
                <ScrollingMenuCompany />
              </div>
            )}
            <li className={styles.li}>Careers</li>
            <li className={styles.li}>About</li>
          </ul>

          <div className="flex flex-col items-center bg-transparent">
            <button className={styles.li}>Login</button>
            <button className="w-full text-[#696969] hover:text-black border border-black rounded-xl py-2 px-5 mt-4 cursor-pointer">
              Register
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  li: "bg-transparent text-[#696969] mt-10 flex items-center hover:text-black cursor-pointer",
};
export default MenuMobile;
