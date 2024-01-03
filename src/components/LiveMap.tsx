import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import moment from "moment";
import { Mapkey } from "../context/Key";
import { useCallback, useRef, useEffect, useState } from "react";
import { useApi } from "../context/Api";

import cctv from "../images/walkie-talkie.png";

import mapi from "../images/mapi.png";

import car from "../images/car.png";
import scout from "../images/cctv-camera.png";
function LiveMap({ selectedDeviceType, height }: any) {
  const { deviceData } = useApi();
  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  const onMarkerClick = (marker: any) => {
    setSelectedMarker(marker);
    console.log(selectedMarker);
  };
  console.log(selectedMarker);
  const closeInfoWindow = () => {
    setSelectedMarker(null);
  };
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
      console.log(filteredDevices);
      setUserLocation(
        filteredDevices?.map((device: any) => ({
          lat: device?.location?.coordinates[0],
          lng: device?.location?.coordinates[1],
          deviceType: device?.deviceType,
          parol: device?.parol?.name,
          status: device?.isOnline ? "Online" : "Offline",
          deviceCode: device?.deviceCode,
          Created: moment(device.created_at).format("MMMM Do YYYY, h:mm:ss a"),
          role: device.role,
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
        return scout;
      case "Scout":
        return cctv;
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
        zoom={5}
        onLoad={onMapLoded}
      >
        {userLocation?.map((location: any, index: number) => (
          <MarkerF
            key={index}
            position={location}
            options={{
              icon: {
                url: getMarkerIcon(location.deviceType),
                scaledSize: new window.google.maps.Size(50, 50),
              },
            }}
            onClick={() => onMarkerClick(location)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow position={selectedMarker} onCloseClick={closeInfoWindow}>
            <div className="infoWindows">
              {/* Customize the content of the info window */}
              <h5>{selectedMarker.deviceType}</h5>
              <p>
                Operator Name: <span>{selectedMarker.parol}</span>{" "}
              </p>
              <p>
                Deivce Code: <span>{selectedMarker.deviceCode}</span>{" "}
              </p>
              <p>
                Status: <span>{selectedMarker.status}</span>{" "}
              </p>
              <p>
                Role: <span>{selectedMarker.role}</span>{" "}
              </p>
              <p>
                Created: <span>{selectedMarker.Created}</span>{" "}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default LiveMap;
