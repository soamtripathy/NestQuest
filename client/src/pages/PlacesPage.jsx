import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

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
            <input type="text" placeholder="title, for example: My Lovely House"/>
          </form>
        </div>
      )}
    </div>
  );
};

export default PlacesPage;
