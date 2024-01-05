import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import { Mapkey } from "../context/Key";
import { useCallback, useRef, useEffect, useState } from "react";
// import { useApi } from "../context/Api";
import moment from "moment";
import cctv from "../images/walkie-talkie.png";

import mapi from "../images/mapi.png";

import car from "../images/car.png";
import scout from "../images/cctv-camera.png";
function InfoBoxMap({ height, data }: any) {
  //   const { deviceData } = useApi();

  //   const Ddata: any = deviceData;
  //   const allDevices: any = Ddata?.data?.all;
  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  const onMarkerClick = (marker: any) => {
    setSelectedMarker(marker);
    console.log(selectedMarker);
  };
  console.log(selectedMarker);
  const closeInfoWindow = () => {
    setSelectedMarker(null);
  };
  const [userLocation, setUserLocation] = useState<
    {
      lat: number;
      lng: number;
      deviceType: string;
      parol: string;
      status: any;
      deviceCode: any;
      Created: any;
      role: any;
    }[]
  >([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: Mapkey,
  });
  const mapRef = useRef<google.maps.Map | null>(null);
  const onMapLoded = useCallback((map: any) => {
    mapRef.current = map;
  }, []);
  useEffect(() => {
    if (data) {
      setUserLocation([
        {
          lat: data?.gps?.coordinates[0],
          lng: data?.gps?.coordinates[1],
          deviceType: data?.device?.deviceType,
          parol: data?.parol?.name,
          status: data?.isOnline ? "Online" : "Offline",
          deviceCode: data?.device?.deviceCode,
          Created: moment(data?.created_at).format("MMMM Do YYYY, h:mm:ss a"),
          role: data?.device?.role,
        },
      ]);
    }
  }, [data]);
  // useEffect(() => {
  //   if (data) {
  //     const coordinates =
  //       data.gps && data.gps.coordinates
  //         ? data.gps.coordinates
  //         : data.location && data.location.coordinates
  //         ? data.location.coordinates
  //         : null;

  //     if (coordinates) {
  //       setUserLocation([
  //         {
  //           lat: coordinates[0],
  //           lng: coordinates[1],
  //           deviceType: data?.device?.deviceType,
  //           parol: data?.parol?.name,
  //           status: data?.isOnline ? "Online" : "Offline",
  //           deviceCode: data?.device?.deviceCode,
  //           Created: moment(data?.created_at).format("MMMM Do YYYY, h:mm:ss a"),
  //           role: data?.device?.role,
  //         },
  //       ]);
  //     }
  //   }
  // }, [data]);
  if (loadError) return "Error";
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  if (loadError) return "Error";

  if (!isLoaded || !data) return "Loading Maps...";
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

export default InfoBoxMap;
