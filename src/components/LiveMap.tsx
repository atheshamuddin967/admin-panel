import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Mapkey } from "../context/Key";
import { useCallback, useRef, useEffect, useState } from "react";
import { useApi } from "../context/Api";
function LiveMap({ height }: any) {
  const { data } = useApi();

  const datas: any = data;
  const UserData = datas.users;

  const [userLocation, setUserLocation] = useState<any[]>([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: Mapkey,
  });
  const mapRef = useRef<google.maps.Map | null>(null);
  const onMapLoded = useCallback((map: any) => {
    mapRef.current = map;
  }, []);
  useEffect(() => {
    if (UserData) {
      setUserLocation(
        UserData?.map((user: any) => ({
          lat: user.location.coordinates[0],
          lng: user.location.coordinates[1],
        }))
      );
    }
  }, [UserData]);

  // useEffect(() => {
  //   if (SearchUser) {
  //     console.log(SearchUser);
  //     const [lng, lat] = SearchUser.location.coordinates;

  //     setUserLocation({ lat, lng });
  //     console.log("Updated user location:", { lat, lng });
  //   } else {
  //     setUserLocation(null);
  //   }
  // }, [SearchUser]);
  if (loadError) return "Error";
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  // const locateUser = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const userLocation = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         };
  //         if (mapRef.current) {
  //           mapRef.current.panTo(userLocation);
  //         }
  //       },
  //       (error) => {
  //         console.error("Error getting user location:", error.message);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by your browser");
  //   }
  // };

  // useEffect(() => {
  //   if (isLoaded) {
  //     locateUser();
  //   }
  // }, [isLoaded]);

  if (loadError) return "Error";

  if (!isLoaded || !UserData) return "Loading Maps...";

  return (
    <div className="mapvew" style={{ height: height, width: "100%" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation[0]}
        zoom={10}
        onLoad={onMapLoded}
      >
        {userLocation?.map((location: any, index: number) => (
          <MarkerF key={index} position={location} />
        ))}
      </GoogleMap>
    </div>
  );
}

export default LiveMap;
