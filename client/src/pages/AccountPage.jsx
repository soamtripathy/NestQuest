import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

const AccountPage = () => {
  const [redirect, setRedirect] = useState(null);
  const { user, loading, setUser } = useContext(UserContext);
  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null)
  }
  if (loading) {
    return "Loading...";
  }
  if (!loading && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  function linkClasses(type = null) {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += "py-2 px-4 bg-primary rounded-full text-white";
    }
    return classes;
  }
  if(redirect){
    return <Navigate to={redirect}/>
  }

  console.log(subpage);
  return (
    <div>
      <nav className={"w-full flex justify-center my-8 gap-2"}>
        <Link to={"/account"} className={linkClasses("profile")}>
          My Account
        </Link>
        <Link to={"/account/bookings"} className={linkClasses("bookings")}>
          My Bookings
        </Link>
        <Link to={"/account/places"} className={linkClasses("places")}>
          My Accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.username} ({user.email})
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
