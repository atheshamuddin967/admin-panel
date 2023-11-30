import {
  createContext,
  useContext,
  useReducer,
  useState,
  ReactNode,
  Dispatch,
} from "react";
interface VideoContextProps {
  videoArray: any[]; // Update this to the type of your videoArray items
  dispatch: Dispatch<any>;
}
const initialState = {
  videoArray: [],
};

const VideoContext = createContext({ videoArray: [] });

export function VideoProvider({ children }: any) {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  function videoReducer(state: any, action: any) {
    switch (action.type) {
      case "ADD_TO_ARRAY":
        const existingItemIndex = state.videoArray.findIndex(
          (item: any) => item.id === action.payload.id
        );

        if (existingItemIndex !== -1) {
          return state;
        }

        const updatedVideoArray = [...state.videoArray, action.payload];
        return { ...state, videoArray: updatedVideoArray };

      // Add other cases if needed

      default:
        return state;
    }
  }

  return (
    <VideoContext.Provider value={{ videoArray: state.videoArray, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
}
export function useCart() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useCart must be used within a VideoProvider");
  }
  return context;
}
