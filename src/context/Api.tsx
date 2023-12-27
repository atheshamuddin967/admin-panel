// ApiContext.js
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const initialstate = {
  isLoading: false,
  isError: false,
  data: [],
  groupData: [],
  deviceData: [],
  addGroup: (formData: any = {}) => Promise.resolve(formData),
  deleteGroup: (group: any = {}) => Promise.resolve(group),
  userData: [],
  AddUser: (userData: any = {}) => Promise.resolve(userData),
  removeParols: (userData: any = {}) => Promise.resolve(userData),
  addDevice: (deviceData: any = {}) => Promise.resolve(deviceData),
};
const BEARER_TOKEN =
  "a6b4d9aba8128a07146dc3c6892805112c99172ca050fb09c0be38cef2b35ae3";
// export const BASE_URL = "https://s1.hostin.one/";
export const BASE_URL = "http://185.31.67.243/";
// const API_ENDPOINT = `${BASE_URL}user/get-users-and-groups`;
const API_ENDPOINT = `${BASE_URL}groups/get-parols-and-groups`;
const Api_createGroup = `${BASE_URL}groups/new-group`;
const Api_createUser = `${BASE_URL}parols/create-parol`;
const API_DeleteGroup = `${BASE_URL}groups/delete-group`;
const API_RemoveParols = `${BASE_URL}groups/remove-parols`;
const API_Devicelistning = `${BASE_URL}devices/devices`;
const API_AddDevice = `${BASE_URL}devices/new-device`;
const ApiContext = createContext(initialstate);
const ApiReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true, isError: false };
    case "SET_API_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "API_ERROR":
      return { ...state, isLoading: false, isError: true };
    case "ADD_GROUP":
      return {
        ...state,
        groupData: [...state.groupData, action.payload],
        data: {
          ...state.data,
          groups: [...state.data.groups, action.payload],
        },
      };

    case "DELETE_GROUP":
      return {
        ...state,
        groupData: state.groupData.filter(
          (group: any) => group._id !== action.payload
        ),
      };

    case "ADD_USER":
      return {
        ...state,
        userData: [state.userData, action.payload],
        data: {
          ...state.data,
          parols: [...state.data.parols, action.payload],
        },
      };
    case "REMOVE_PAROLS_FROM_GROUP":
      console.log("Previous State:", state);

      const updatedState = {
        ...state,
        groupData: state.groupData.map((group: any) => {
          if (group._id === action.payload.groupId) {
            const updatedParols = group.parols.filter(
              (parol: any) => !action.payload.parolIds.includes(parol._id)
            );

            return {
              ...group,
              parols: updatedParols,
            };
          }
          return group;
        }),
      };

      console.log("Updated State:", updatedState);

      return updatedState;
    case "ADD_DEVICE":
      return {
        ...state,
        isLoading: false,
        isError: false,
        deviceData: action.payload,
      };
    case "ADD_DEVICE_SUCCESS":
      return {
        ...state,
        deviceData: [...state.deviceData, action.payload],
        data: {
          ...state.deviceData,
          deviceData: [...state.deviceData.data, action.payload],
        },
      };

    case "ADD_DEVICE_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

const ApiProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(ApiReducer, initialstate);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({ type: "SET_LOADING" });
  //     try {
  //       const res = await axios.get(API_ENDPOINT, {
  //         headers: {
  //           Authorization: `Bearer ${BEARER_TOKEN}`,
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await res.data;

  //       dispatch({ type: "SET_API_PRODUCTS", payload: data });
  //     } catch (error) {
  //       dispatch({ type: "API_ERROR" });
  //     }
  //   };

  //   if (
  //     state.data.length === 0 ||
  //     state.isLoading ||
  //     state.userData.length > 0
  //   ) {
  //     fetchData();
  //   }
  // }, [state.data, state.isLoading, state.data.users]);

  // fetch api parols and group
  const fetchData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      // console.log(data);
      dispatch({ type: "SET_API_PRODUCTS", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  // fetch device api
  const fetchDeviceData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API_Devicelistning, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const deviceData = res.data;

      dispatch({ type: "ADD_DEVICE", payload: deviceData });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();
    fetchDeviceData();
    // Fetch data every 3 seconds
    const intervalId = setInterval(() => {
      fetchData();
      fetchDeviceData();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // addgroup function
  const addGroup = async (formData: any) => {
    try {
      const response = await axios.post(
        Api_createGroup,

        formData,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      const newGroup = response.data.data;

      dispatch({ type: "ADD_GROUP", payload: newGroup });
    } catch (error: any) {
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error(
          "Request made but no response received. Request details:",
          error.request
        );
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  // deletegroup function
  const deleteGroup = async (groupId: string) => {
    try {
      console.log("Deleting group with ID:", groupId);

      // Send a POST request to the API_DeleteGroup endpoint with the groupId in the request body
      const response = await axios.post(
        API_DeleteGroup,
        { groupId: groupId },
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Delete Group Response:", response);

      // Dispatch the "DELETE_GROUP" action with the groupId
      dispatch({ type: "DELETE_GROUP", payload: groupId });
    } catch (error: any) {
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error(
          "Request made but no response received. Request details:",
          error.request
        );
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  // adduserfunction
  const AddUser = async (userData: any) => {
    try {
      const response = await axios.post(Api_createUser, userData, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      const newUser = response.data.data;

      dispatch({ type: "ADD_USER", payload: newUser });
    } catch (error: any) {
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error(
          "Request made but no response received. Request details:",
          error.request
        );
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  const removeParols = async (groupId: string, parolIds: string[]) => {
    try {
      console.log("Removing patrols from group with ID:", groupId);

      // Log the payload
      console.log("Remove Parols Payload:", { groupId, parolIds });

      const response = await axios.post(
        API_RemoveParols,
        { groupId: groupId, parolIds: parolIds },
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Remove Parols Response:", response);

      dispatch({
        type: "REMOVE_PAROLS_FROM_GROUP",
        payload: { groupId: groupId, parolIds: parolIds },
      });
    } catch (error: any) {
      // ... (error handling code)
    }
  };
  const addDevice = async (deviceData: any) => {
    try {
      dispatch({ type: "SET_LOADING" });

      const response = await axios.post(API_AddDevice, deviceData, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      const newDevice = response.data.data;

      dispatch({ type: "ADD_DEVICE_SUCCESS", payload: newDevice });
    } catch (error: any) {
      dispatch({ type: "ADD_DEVICE_ERROR" });

      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error(
          "Request made but no response received. Request details:",
          error.request
        );
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <ApiContext.Provider
      value={{
        ...state,
        addGroup,
        deleteGroup,
        AddUser,
        removeParols,
        addDevice,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }

  return context;
};

export default ApiProvider;
