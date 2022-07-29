const ScrollingMenuCompany = () => {
  return (
    <ul className="border-none bg-white lg:shadow-xl p-6 rounded-xl">
      <li className={styles.li}>History</li>
      <li className={styles.li}>Our Team</li>
      <li className="bg-white text-[#696969] flex items-center">Blog</li>
    </ul>
  );
};

const styles = {
  li: "bg-white text-[#696969] flex items-center pb-4",
};

export default ScrollingMenuCompany;
