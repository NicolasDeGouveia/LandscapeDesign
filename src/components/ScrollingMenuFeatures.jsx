import todo from "../assets/icon-todo.svg";
import calendar from "../assets/icon-calendar.svg";
import reminder from "../assets/icon-reminders.svg";
import planning from "../assets/icon-planning.svg";

const ScrollingMenuFeatures = () => {
  return (
    <ul className="border-none bg-white w-[180px] lg:shadow-xl p-6 rounded-xl">
      <li className={styles.li}>
        <span className={styles.span}>
          <img src={todo} alt="" />
        </span>{" "}
        Todo List
      </li>
      <li className={styles.li}>
        <span className={styles.span}>
          <img src={calendar} alt="" />
        </span>{" "}
        Calendar
      </li>
      <li className={styles.li}>
        <span className={styles.span}>
          <img src={reminder} alt="" />
        </span>
        Reminders
      </li>
      <li className="bg-white text-[#696969] flex items-center">
        <span className={styles.span}>
          <img src={planning} alt="" />
        </span>
        Planning
      </li>
    </ul>
  );
};

const styles = {
  li: "bg-white text-[#696969] flex items-center pb-4",
  span: "mr-3",
};

export default ScrollingMenuFeatures;
