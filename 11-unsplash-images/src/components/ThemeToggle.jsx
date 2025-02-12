import { useGlobalContext } from "../context/context";
import { IoSunnySharp, IoMoonOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <IoMoonOutline className="toggle-icon" />
        ) : (
          <IoSunnySharp className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
