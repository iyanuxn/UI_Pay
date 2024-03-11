import React, { useState } from "react";
import Logo from "../assets/items_logo.svg";
import { GoSearch } from "react-icons/go";
import { IoIosHelpCircle } from "react-icons/io";

const Nav = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="grid grid-cols-3 px-10 py-4">
      {/* Logo */}
      <div>
        <img src={Logo} alt="logo" className="w-32" />
      </div>
      {/* Search Bar */}
      <form
        className="flex justify-center items-center border-2 border-gray-200 rounded-xl px-4 gap-4 focus-within:border-gray-400 transition duration-200 ease-in-out"
      >
        <GoSearch className="text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search for items"
          value={searchTerm}
          onChange={handleChange}
          className="w-full outline-none border-none"
        />
      </form>
      {/* Help Icon and Login Button */}
      <div className="flex items-center gap-4 justify-end">
        <IoIosHelpCircle className="text-5xl text-blue-500" />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
