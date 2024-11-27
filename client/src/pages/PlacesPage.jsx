import { Link, useParams } from "react-router-dom";
import {
  FaCar,
  FaDog,
  FaDoorOpen,
  FaPlus,
  FaTv,
  FaUpload,
  FaWifi,
} from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
const PlacesPage = () => {
  const { action } = useParams();

  return (
    <div>
      {action !== "new " && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/places/new"}
          >
            <FaPlus className="mt-1" />
            Add new place
          </Link>
        </div>
      )}

      {action === "new" && (
        <div>
          <form>
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">
              title for your place, should be short and catchy as in
              advertisement
            </p>
            <input
              type="text"
              placeholder="title, for example: My Lovely House"
            />
            <h2 className="text-2xl mt-4">Address</h2>
            <p className="text-gray-500 text-sm">Address to this place</p>
            <input type="text" placeholder="address" />
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">more = better</p>
            <div className="flex gap-2">
              <input type="text" placeholder={"Add using a link ...jpg"} />
              <button className="bg-gray-200 px-4 rounded-2xl">
                Add&nbsp;photo
              </button>
            </div>
            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="border bg-transparent rounded-2xl p-10 text-2xl text-gray-600 flex justify-center gap-2">
                <FaUpload /> Upload
              </button>
            </div>

            <h2 className="text-2xl mt-4">Description</h2>
            <p className="text-gray-500 text-sm">description of place</p>
            <textarea />
            <h2 className="text-2xl mt-4">Perks</h2>
            <p className="text-gray-500 text-sm">
              select all the perks of your places
            </p>
            <div className="grid mt-2 grid-cols-2 md:grid-cols-3   lg:grid-cols-6 gap-2 cursor-pointer">
              <label className="border p-4 flex  rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <FaWifi />
                <span>Wifi</span>
              </label>{" "}
              <label className="border p-4 flex  rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <FaCar />
                <span>Free Parking spot</span>
              </label>{" "}
              <label className="border p-4 flex  rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <FaTv />
                <span>TV</span>
              </label>{" "}
              <label className="border p-4 flex  rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <FaRadio />
                <span>Radio</span>
              </label>
              <label className="border p-4 flex  rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <FaDog />
                <span>Pets</span>
              </label>{" "}
              <label className="border p-4 flex  rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <FaDoorOpen />
                <span>Private Entrance</span>
              </label>
            </div>
            <h2 className="text-2xl mt-4">Extra Info</h2>
            <p className="text-gray-500 text-sm">House rules, etc.</p>
            <textarea />
            <h2 className="text-2xl mt-4"> Check In & Out time</h2>
            <p className="text-gray-500 text-sm">
              Add check in and out time , remember to have some time window for
              cleaning the room between guets
            </p>
            <div className="grid sm:grid-cols-3 gap-2">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input type="text" placeholder="14:00" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check Out Time</h3>
                <input type="text" placeholder="19:00" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max Guests</h3>
                <input type="text" placeholder="2 or 3 adults" />
              </div>
            </div>
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PlacesPage;
