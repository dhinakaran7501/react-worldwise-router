import "./nestedroute.css";
import Sidebar from "../sidebar/sidebar";
import Map from "../map/map";

const Nestedroute = () => {
  return (
    <div className="cities">
      <Sidebar />
      <div className="row2">
        <Map />
      </div>
    </div>
  );
};

export default Nestedroute;
