// ApiContext.js
import {
  createContext,
  useContext,
  // useState,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
// import Reducer from "./Apireducer";
const initialstate = {
  isLoading: false,
  isError: false,
  data: [],
  groupData: [],
  addGroup: (formData: any) => Promise.resolve(),
  deleteGroup: (group: any) => Promise.resolve(),
  UserData: [],
  AddUser: () => Promise.resolve(),
};
const BEARER_TOKEN =
  "a6b4d9aba8128a07146dc3c6892805112c99172ca050fb09c0be38cef2b35ae3";
const BASE_URL = "https://s1.hostin.one/";
const API_ENDPOINT = `${BASE_URL}user/get-users-and-groups`;
const Api_createGroup = `${BASE_URL}user/new-group`;
const Api_createUser = `${BASE_URL}user/create-user`;
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
          (group: any) => group.id !== action.payload
        ),
      };

    case "ADD_USER":
      return {
        ...state,
        UserData: [state.UserData, action.payload],
      };

    default:
      return state;
  }
};

const ApiProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(ApiReducer, initialstate);
  useEffect(() => {
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
        console.log(data);
        dispatch({ type: "SET_API_PRODUCTS", payload: data });
      } catch (error) {
        dispatch({ type: "API_ERROR" });
      }
    };

    if (state.data.length === 0 || state.isLoading) {
      fetchData();
    }
  }, [state.data, state.isLoading]);
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

  const deleteGroup = (groupId: string) => {
    // Dispatch the "DELETE_GROUP" action with the groupId
    dispatch({ type: "DELETE_GROUP", payload: groupId });
  };
  const AddUser = async () => {
    try {
      const response = await axios.post(
        Api_createUser,

        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      const newUser = response.data.data;

      dispatch({ type: "ADD_GROUP", payload: newUser });
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
  return (
    <ApiContext.Provider value={{ ...state, addGroup, deleteGroup, AddUser }}>
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
