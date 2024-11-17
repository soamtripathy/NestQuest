import React, { useContext } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div>
        <header className=" flex justify-between">
          <Link to={"/"} className="flex items-center ">
            <img src="./logo.png" alt="" className="h-15 w-20" />
            <span className="font-bold text-xl mb-2">
              Nest<span className="text-rose-400">Quest</span>
            </span>
          </Link>
          <div className="  flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
            <div>Anywhere</div>
            <div className="border-l border-gray-300"></div>
            <div>Any week</div>
            <div className="border-l border-gray-300 "></div>
            <div className="text-gray-500">Add guests</div>
            <button className="bg-primary text-white p-2 rounded-full">
              <FaSearch />
            </button>
          </div>
          <Link
            to={user ? "/account" : "/login"}
            className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 items-center shadow-sm shadow-gray-300"
          >
            <GiHamburgerMenu />
            <div className="text-3xl">
              {" "}
              <FaUserCircle />{" "}
            </div>
            {!!user && <div>{user.username}</div>}
          </Link>
        </header>
      </div>
    </div>
  );
};

export default Header;
