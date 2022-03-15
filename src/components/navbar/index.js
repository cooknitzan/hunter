import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

function Navbar() {
  const company = "Hunter.AI".split("");
  const name = "@NitzanCook".split("");
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <nav>
      {company.map((elm, i) => {
        return (
          <motion.span
            key={i}
            onClick={() => clickHandler()}
            whileHover={{
              scale: 1.4,
              transition: { ease: "easeOut", duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            {elm}
          </motion.span>
        );
      })}
      {name.map((elm, i) => {
        return (
          <motion.span
            key={i}
            whileHover={{
              scale: 2,
              transition: { ease: "easeOut", duration: 0.3 },
            }}
            whileTap={{ scale: 1.2 }}
            className="letter"
          >
            {elm}
          </motion.span>
        );
      })}
    </nav>
  );
}

export default Navbar;
