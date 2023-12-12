import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const initialstate = {
  isLoading: false,
  isError: false,
  Rtmpdata: [],
};
const RtmpApiContext = createContext(initialstate);
let url = "http://192.168.100.44:8000/api/streams";

const RtmApiReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true, isError: false };
    case "SET_API_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        Rtmpdata: action.payload,
      };

      return {
        ...state,
        userData: [state.userData, action.payload],
        data: {
          ...state.data,
          users: [...state.data.users, action.payload],
        },
      };

    default:
      return state;
  }
};
const RtmApiProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(RtmApiReducer, initialstate);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await axios.get(url);

        const Rtmpdata = await res.data;

        dispatch({ type: "SET_API_PRODUCTS", payload: Rtmpdata });
      } catch (error) {
        dispatch({ type: "API_ERROR" });
      }
    };

    if (state.Rtmpdata.length === 0 || state.isLoading) {
      fetchData();
    }
  }, [state.Rtmpdata]);

  //   dispatch({ type: "SET_LOADING" });
  //   try {
  //     const res = await axios.get(API_ENDPOINT, {
  //       headers: {
  //         Authorization: `Bearer ${BEARER_TOKEN}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await res.data;

  //     dispatch({ type: "SET_API_PRODUCTS", payload: data });
  //   } catch (error) {
  //     dispatch({ type: "API_ERROR" });
  //   }
  // };

  // useEffect(() => {
  //   // Fetch data initially
  //   fetchData();

  //   // Fetch data every 3 seconds
  //   const intervalId = setInterval(() => {
  //     fetchData();
  //   }, 3000);

  //   return () => clearInterval(intervalId);
  // }, []);

  // addgroup function

  return (
    <RtmpApiContext.Provider value={{ ...state }}>
      {children}
    </RtmpApiContext.Provider>
  );
};
export const useRtmpApi = () => {
  const context = useContext(RtmpApiContext);

  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }

  return context;
};
export default RtmApiProvider;
