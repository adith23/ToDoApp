import React from "react";
import { NavLink } from "react-router-dom";
import HouseIcon from "/House.svg";
import HouseIconFill from "/HouseFill.svg";
import CalendarIcon from "/Calendar.svg";
import CalendarIconFill from "/CalendarFill.svg";
import TaskIcon from "/Task.svg";
import TaskIconFill from "/TaskFill.svg";
import UserIcon from "/User.svg";
import UserIconFill from "/UserFill.svg";
import { useTheme } from "../Components/ThemeContext";
import LightIcon from "/sun.svg";
import DarkIcon from "/moon.svg";

export default function FloatingNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-center items-center gap-5 bg-transparent">
      <div className="relative top-6 list-none flex justify-center items-center gap-[100px] max-md:gap-[70px] max-sm:gap-[40px] bg-primary2 w-[600px] max-md:w-[400px] max-sm:w-[300px] h-[60px] rounded-full">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "active-nav-item" : "inactive-nav-item"
          }
        >
          {({ isActive }) => (
            <img src={isActive ? HouseIconFill : HouseIcon} alt="Home Icon" />
          )}
        </NavLink>
        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            isActive ? "active-nav-item" : "inactive-nav-item"
          }
        >
          {({ isActive }) => (
            <img
              src={isActive ? CalendarIconFill : CalendarIcon}
              alt="Calendar Icon"
            />
          )}
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive ? "active-nav-item" : "inactive-nav-item"
          }
        >
          {({ isActive }) => (
            <img src={isActive ? TaskIconFill : TaskIcon} alt="Task Icon" />
          )}
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "active-nav-item" : "inactive-nav-item"
          }
        >
          {({ isActive }) => (
            <img src={isActive ? UserIconFill : UserIcon} alt="User Icon" />
          )}
        </NavLink>
      </div>
      <div className="relative flex gap-5 top-6 w-auto h-auto max-md:hidden">
        <a
          href="/"
          className="flex items-center justify-center  h-[60px] w-[60px] bg-red rounded-full"
        >
          <img className="w-5" src="/CombinedShape.svg" alt="" />
        </a>
        <button
          className={
            "flex justify-center items-center bg-primary1 h[60px] w-[60px] rounded-full"
          }
          onClick={toggleTheme}
        >
          <img
            className="w-7"
            src={theme === "light" ? DarkIcon : LightIcon}
            alt="icon"
          />
        </button>
      </div>
    </div>
  );
}
