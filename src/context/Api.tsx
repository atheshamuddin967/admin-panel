// ApiContext.js
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const initialstate = {
  isLoading: false,
  isError: false,
  data: [],
  groupData: [],
  deviceData: [],
  eventData: [],
  userData: [],
  multimediaData: [],
  liveAlarmData: [],
  adminRoles: [],
  adminData: [],
  admin: [],
  addGroup: (formData: any = {}) => Promise.resolve(formData),
  deleteGroup: (group: any = {}) => Promise.resolve(group),
  AddUser: (userData: any = {}) => Promise.resolve(userData),
  removeParols: (userData: any = {}) => Promise.resolve(userData),
  addDevice: (deviceData: any = {}) => Promise.resolve(deviceData),
  deleteDevice: (_deviceId: string) => Promise.resolve({}),
  deleteEvent: (_eventId: string) => Promise.resolve({}),
  deleteLiveAlarm: (_alarmId: string) => Promise.resolve({}),
  resolveLiveAlarm: (_alarmId: string) => Promise.resolve({}),
  deleteMultimedia: (_mediaId: string) => Promise.resolve({}),
  adminLogin: (credentials: { email: string; password: string }) =>
    Promise.resolve(credentials),
  createAdminRole: (adminRoleData: any) => Promise.resolve(adminRoleData),
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
const API_deleteDevice = `${BASE_URL}devices/remove-device`;
const API_EventListning = `${BASE_URL}events/events`;
const API_deleteEevent = `${BASE_URL}events/remove-event`;
const API_LiveAlarm = `${BASE_URL}livealarm/livealarms`;
const API_deleteAlarm = `${BASE_URL}livealarm/remove-alarm`;
const API_resolveAlarm = `${BASE_URL}livealarm/resolve-alarm`;
const API_multiMedia = `${BASE_URL}multimedia/multimedia`;
const API_deleteMulti = `${BASE_URL}multimedia/remove-media`;
const API_creaateAdmin = `${BASE_URL}admin/admin-role`;
const API_AdminRoles = `${BASE_URL}admin/admin-roles`;
// const API_RemoveAdmin = `${BASE_URL}admin/remove-adminrole`;
const API_Admin_Login = `${BASE_URL}admin/login-admin`;
// const API_createSubADmin = `${BASE_URL}admin/create-admin`;
// const API_SystemConfig = `${BASE_URL}system/system-config`;
// const API_EditSystem = `${BASE_URL}system/edit-systemconf`;

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
      };

    case "ADD_DEVICE_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "FETCH_MULTIMEDIA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        multimediaData: action.payload,
      };
    case "DELETE_DEVICE":
      return {
        ...state,
        deviceData: state.deviceData?.data.filter(
          (device: any) => device._id !== action.payload
        ),
      };

    case "SET_EVENTS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        eventData: action.payload,
      };
    case "SET_LIVE_ALARMS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        liveAlarmData: action.payload,
      };
    case "DELETE_EVENT":
      return {
        ...state,
        eventData: state.eventData.filter(
          (event: any) => event._id !== action.payload
        ),
      };
    case "DELETE_LIVE_ALARM":
      return {
        ...state,
        liveAlarmData: state.liveAlarmData?.data?.filter(
          (alarm: any) => alarm._id !== action.payload
        ),
      };
    case "RESOLVE_LIVE_ALARM":
      const resolvedAlarmId = action.payload;

      return {
        ...state,
        liveAlarmData: state.liveAlarmData?.data?.map((alarm: any) =>
          alarm._id === resolvedAlarmId ? { ...alarm, isResolved: true } : alarm
        ),
      };

    case "DELETE_MULTIMEDIA":
      return {
        ...state,
        multimediaData: state.multimediaData?.filter(
          (media: any) => media._id !== action.payload
        ),
      };

    case "SET_ADMIN_ROLES":
      return {
        ...state,
        isLoading: false,
        isError: false,
        adminRoles: action.payload,
      };
    case "ADMIN_LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        admin: action.payload,
        loginError: null,
      };
    case "ADMIN_LOGIN_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        loginError: action.payload,
      };
    case "CREATE_ADMIN_ROLE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case "CREATE_ADMIN_ROLE_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
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
      console.log(error);
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
      console.log(deviceData);
      dispatch({ type: "ADD_DEVICE", payload: deviceData });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // fetch multimedia api funcion
  const fetchMultimediaData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API_multiMedia, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const multimediaData = res.data;
      // console.log(multimediaData);
      dispatch({ type: "FETCH_MULTIMEDIA_SUCCESS", payload: multimediaData });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // fetch event data
  const fetchEventData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API_EventListning, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const eventData = res.data;
      // console.log(eventData);
      dispatch({ type: "SET_EVENTS", payload: eventData.data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.log(error);
    }
  };

  // fetch live alarm data
  const fetchLiveAlarmData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API_LiveAlarm, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const liveAlarmData = res.data;
      // console.log(liveAlarmData);
      dispatch({ type: "SET_LIVE_ALARMS", payload: liveAlarmData.data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.log(error);
    }
  };

  // fetch Admin ROle
  const fetchAdminRoles = async () => {
    try {
      const response = await axios.get(API_AdminRoles, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const adminRoles = response?.data?.data;
      console.log(adminRoles);
      dispatch({ type: "SET_ADMIN_ROLES", payload: adminRoles });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.error("Error fetching admin roles:", error);
    }
  };

  const isMounted = useRef(true);

  useEffect(() => {
    // Fetch data initially
    fetchData();
    fetchDeviceData();
    fetchMultimediaData();
    fetchEventData();
    fetchLiveAlarmData();
    fetchAdminRoles();
    // Fetch data every 3 seconds
    const intervalId = setInterval(() => {
      fetchData();
      fetchDeviceData();
      fetchMultimediaData();
      fetchEventData();
      fetchLiveAlarmData();
      fetchAdminRoles();
    }, 3000000);

    return () => {
      isMounted.current = false;
      clearInterval(intervalId);
    };
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
  // remove parol function
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

      // Extract GPS data from the array
      const [latitude, longitude] = deviceData.gps;
      console.log(deviceData);
      const response = await axios.post(
        API_AddDevice,
        {
          ...deviceData,
          coordinates: [parseFloat(latitude), parseFloat(longitude)],
        },
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 6000,
      });

      const newDevice = response?.data;

      // dispatch({ type: "ADD_DEVICE_SUCCESS", payload: newDevice });
      fetchDeviceData();
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

  // delete device funcion
  const deleteDevice = async (deviceId: string) => {
    try {
      console.log("Deleting device with ID:", deviceId);

      // Send a POST request to the API_deleteDevice endpoint with the deviceId in the request body
      const response = await axios.post(
        API_deleteDevice,
        { deviceId: deviceId },
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Delete Device Response:", response);

      // Dispatch the "DELETE_DEVICE" action with the deviceId
      // dispatch({ type: "DELETE_DEVICE", payload: deviceId });
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

  // delet event function
  const deleteEvent = async (eventId: string) => {
    try {
      console.log("Deleting event with ID:", eventId);

      // Send a POST request to the API_deleteEevent endpoint with the eventId in the request body
      const response = await axios.post(
        API_deleteEevent,
        { eventId: eventId },
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Delete Event Response:", response);

      // Dispatch the "DELETE_EVENT" action with the eventId
      dispatch({ type: "DELETE_EVENT", payload: eventId });
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

  // delete alarm funncion
  const deleteLiveAlarm = async (alarmId: string) => {
    try {
      // console.log("Deleting live alarm with ID:", alarmId);

      // Send a POST request to the API_deleteAlarm endpoint with the alarmId in the request body
      const response = await axios.post(
        API_deleteAlarm,
        { alarmId: alarmId },
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Delete Live Alarm Response:", response);

      // Dispatch the "DELETE_LIVE_ALARM" action with the alarmId
      dispatch({ type: "DELETE_LIVE_ALARM", payload: alarmId });
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

  // resolve alarm function
  const resolveLiveAlarm = async (alarmId: any) => {
    try {
      const response = await axios.post(
        API_resolveAlarm,
        { alarmId: alarmId },

        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Resolving live alarm with ID:", alarmId);

      console.log("Resolve Live Alarm Response:", response);

      // Dispatch the "RESOLVE_LIVE_ALARM" action with the alarmId
      dispatch({ type: "RESOLVE_LIVE_ALARM", payload: alarmId });
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

  // delete multimedia
  const deleteMultimedia = async (mediaId: string) => {
    try {
      console.log("Deleting multimedia with ID:", mediaId);

      // Send a POST request to the API_deleteMulti endpoint with the mediaId in the request body
      const response = await axios.post(
        API_deleteMulti,
        { mediaId: mediaId },
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Delete Multimedia Response:", response);

      // Dispatch the "DELETE_MULTIMEDIA" action with the mediaId
      if (isMounted.current) {
        // Dispatch the "DELETE_MULTIMEDIA" action with the mediaId
        dispatch({ type: "DELETE_MULTIMEDIA", payload: mediaId });
      }
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
  //  admin authentication
  const adminLogin = async (credentials: {
    email: string;
    password: string;
  }) => {
    try {
      dispatch({ type: "SET_LOADING" });

      // Call your admin login API
      const response = await axios.post(API_Admin_Login, credentials, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      console.log("its resposnse is", response);
      if (response.status === 200) {
        const admin = response?.data?.user;
        console.log(admin);
        dispatch({ type: "ADMIN_LOGIN_SUCCESS", payload: admin });
      } else {
        dispatch({ type: "ADMIN_LOGIN_ERROR", payload: "Login failed" });
      }
    } catch (error: any) {
      // Dispatch an error action or handle the error accordingly
      dispatch({ type: "ADMIN_LOGIN_ERROR", payload: error.message });
    }
  };

  // admin role create
  const createAdminRole = async (adminRoleData: any) => {
    try {
      dispatch({ type: "SET_LOADING" });
      console.log(API_creaateAdmin);
      const response = await axios.post(API_creaateAdmin, adminRoleData, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      const newAdminRole = response?.data;
      toast.success(response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 6000,
      });
      fetchAdminRoles();
      console.log("s ", newAdminRole);
      dispatch({ type: "CREATE_ADMIN_ROLE_SUCCESS", payload: newAdminRole });
    } catch (error: any) {
      dispatch({ type: "CREATE_ADMIN_ROLE_ERROR", payload: error.message });
      console.log("error is", error, error.message);
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
        deleteDevice,
        deleteEvent,
        deleteLiveAlarm,
        resolveLiveAlarm,
        deleteMultimedia,
        adminLogin,
        createAdminRole,
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
