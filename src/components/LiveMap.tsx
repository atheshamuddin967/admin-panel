import {
  GoogleMap,
  //   useJsApiLoader,
  useLoadScript,
  //   MarkerF,
} from "@react-google-maps/api";

import { Mapkey } from "../context/Key";
import { useCallback, useRef } from "react";
// const Marker = ({ t }: any) => <div className="marker">{t}</div>;

function LiveMap() {
  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: Mapkey,
  });
  //   const [map, setMap] = useState(null);
  const mapRef = useRef();
  const onMapLoded = useCallback((map: any) => {
    mapRef.current = map;
  }, []);
  //   const onLoad = useCallback(function callback(map: any) {
  //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //     const bounds = new window.google.maps.LatLngBounds(center);
  //     map.fitBounds(bounds);

  //     setMap(map);
  //   }, []);

  //   const onUnmount: any = useCallback(function callback(map: any) {
  //     setMap(null);
  //   }, []);
  if (loadError) return "Error";
  const containerStyle = {
    width: "400px",
    height: "400px",
  };
  if (isLoaded) return "Maps";
  return (
    <div className="mapvew" style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onMapLoded}
        // onUnmount={onUnmount}
      ></GoogleMap>
    </div>
  );
}

export default LiveMap;
