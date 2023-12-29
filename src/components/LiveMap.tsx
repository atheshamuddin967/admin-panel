import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Mapkey } from "../context/Key";
import { useCallback, useRef, useEffect, useState } from "react";
import { useApi } from "../context/Api";

import cctv from "../images/walkie-talkie.png";

import mapi from "../images/mapi.png";

import car from "../images/car.png";
import scout from "../images/cctv-camera.png";
function LiveMap({ selectedDeviceType, height }: any) {
  const { deviceData } = useApi();

  const Ddata: any = deviceData;
  const allDevices: any = Ddata?.data?.all;
  const [userLocation, setUserLocation] = useState<
    { lat: number; lng: number; deviceType: string }[]
  >([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: Mapkey,
  });
  const mapRef = useRef<google.maps.Map | null>(null);
  const onMapLoded = useCallback((map: any) => {
    mapRef.current = map;
  }, []);
  useEffect(() => {
    const filteredDevices =
      selectedDeviceType === "All"
        ? allDevices
        : allDevices?.filter((device: any) =>
            selectedDeviceType === "Online" ? device.isOnline : !device.isOnline
          );

    if (filteredDevices) {
      setUserLocation(
        filteredDevices?.map((device: any) => ({
          lat: device?.location?.coordinates[0],
          lng: device?.location?.coordinates[1],
          deviceType: device?.deviceType,
        }))
      );
    }
  }, [selectedDeviceType, allDevices]);
  // console.log(userLocation);
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

  if (!isLoaded || !allDevices) return "Loading Maps...";
  const getMarkerIcon = (deviceType: any) => {
    switch (deviceType) {
      case "Fixed camera":
        return cctv;
      case "Scout":
        return scout;
      case "Car Boarded":
        return car;
      default:
        return mapi;
    }
  };
  return (
    <div className="mapvew" style={{ height: height, width: "100%" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation[0]}
        zoom={10}
        onLoad={onMapLoded}
      >
        {userLocation?.map((location: any, index: number) => (
          <MarkerF
            key={index}
            position={location}
            options={{
              icon: {
                url: getMarkerIcon(location.deviceType),
                scaledSize: new window.google.maps.Size(30, 30),
              },
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default LiveMap;
