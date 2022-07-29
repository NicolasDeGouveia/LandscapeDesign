import databiz from "../assets/client-databiz.svg";
import audiophile from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";
import heroDesktop from "../assets/image-hero-desktop.png";
import heroMobile from "../assets/image-hero-mobile.png";

const Main = () => {
  return (
    <main className="section-paddingY">
      <div className="container-width flex flex-col-reverse lg:flex-row justify-around  ">
        {/* PARTIE TEXT & ICONE */}
        <div className="py-6 lg:py-0 flex flex-col justify-center items-center lg:items-start">
          <h1 className="lg:w-[480px] text-4xl lg:text-7xl font-bold mb-12">
            Make remote work
          </h1>

          <p className="text-center lg:text-start lg:w-[440px] text-[#696969] text-lg mb-12">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button className="text-white hover:text-black bg-black hover:bg-transparent border border-black rounded-xl py-3 px-7">
            Learn more
          </button>

          <div className="flex mt-12 lg:mt-32 px-4">
            <div className={`lg:${styles.iconsDesk}`}>
              <img src={databiz} alt="" />
            </div>
            <div className={styles.iconsDesk}>
              <img src={audiophile} alt="" />
            </div>
            <div className={styles.iconsDesk}>
              <img src={meet} alt="" />
            </div>
            <div className={styles.iconsDesk}>
              <img src={maker} alt="" />
            </div>
          </div>
        </div>

        {/* PARTIE IMAGE */}
        <div className="hidden lg:block w-[400px]">
          <img src={heroDesktop} alt="" />
        </div>
        <div className="lg:hidden">
          <img src={heroMobile} alt="" />
        </div>
      </div>
    </main>
  );
};

const styles = {
  iconsDesk: "ml-12",
};

export default Main;
