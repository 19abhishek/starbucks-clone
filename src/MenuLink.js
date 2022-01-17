import React from "react";
import "./MenuLink.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

export const MenuLink = ({ link, path, icon, goBackIcon, onClick, width }) => {
  return (
    <>
      <Link to={path}>
        <motion.li
          style={{ width }}
          onClick={onClick}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {goBackIcon && <ChevronLeftIcon fontSize="large" />}
          {link}
          {icon && <ChevronRightIcon fontSize="large" />}
        </motion.li>
      </Link>
    </>
  );
};

export default MenuLink;
