import Input from "../../components/Input";
import LiveMap from "../../components/LiveMap";
import "../Mapview/Map.scss";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function Mapview() {
  const { item } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!item) {
      // Handle the case where 'item' is not available
      console.error("Item not available. Navigating to default map screen.");
      // You can navigate to the default map screen or handle it as needed
      navigate("/Map");
    }
  }, [item, navigate]);

  console.log(item);

  return (
    <div className="container">
      <div className="inp-box">
        <Input placeholder={"Search Devices"} />
      </div>

      {/* <Googlemap height={"500px"} /> */}
      <LiveMap />
    </div>
  );
}

export default Mapview;
